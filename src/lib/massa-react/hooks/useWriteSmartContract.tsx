import { useState } from 'react';
import { toast } from '../../../components';
import { logSmartContractEvents, showToast } from '../utils';
import Intl from '../i18n';
import {
  IAccount,
  IProvider,
  ITransactionDetails,
} from '@massalabs/wallet-provider';
import {
  Account,
  JsonRPCClient,
  Mas,
  MAX_GAS_CALL,
  Operation,
  OperationStatus,
  Web3Provider,
} from '@massalabs/massa-web3';
import { MINIMAL_FEE } from '../const';

interface ToasterMessage {
  pending: string;
  success: string;
  error: string;
  timeout?: string;
}

function minBigInt(a: bigint, b: bigint) {
  return a < b ? a : b;
}

export function useWriteSmartContract(
  account: IAccount,
  provider: IProvider,
  isMainnet = false,
) {
  const [isPending, setIsPending] = useState(false);
  const [isOpPending, setIsOpPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [opId, setOpId] = useState<string | undefined>(undefined);

  function resetState() {
    setIsPending(false);
    setIsOpPending(false);
    setIsSuccess(false);
    setIsError(false);
    setOpId(undefined);
  }

  async function gasEstimation(
    targetFunction: string,
    targetAddress: string,
    parameter: Uint8Array,
    coins = Mas.fromString('0'),
    fee = MINIMAL_FEE,
  ): Promise<bigint> {
    try {
      const estimation = await account.readSc(
        targetAddress,
        targetFunction,
        parameter,
        coins,
        fee,
        MAX_GAS_CALL,
      );

      // Todo - Fix wallet provider to return right readSc interface
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const gasCost = BigInt(estimation.info.result[0].gas_cost);

      return minBigInt(gasCost + (gasCost * 20n) / 100n, MAX_GAS_CALL);
    } catch (error) {
      console.error('Gas estimation failed:', error);
      throw new Error('Failed to estimate gas.');
    }
  }

  async function getMinimalFee(
    publicClient: JsonRPCClient,
    fee?: bigint,
  ): Promise<bigint> {
    const minimalFee = await publicClient.getMinimalFee();

    if (!fee || fee < minimalFee) return minimalFee;
    return fee;
  }

  async function getClientAndProvider(account: Account) {
    const network = await provider.getNetwork();
    switch (network) {
      case 'buildnet':
        return {
          publicClient: JsonRPCClient.buildnet(),
          provider: Web3Provider.newPublicBuildnetProvider(account),
        };
      case 'mainnet':
        return {
          publicClient: JsonRPCClient.mainnet(),
          provider: Web3Provider.newPublicMainnetProvider(account),
        };
      default:
        throw new Error('Unsupported network');
    }
  }

  async function callSmartContract(
    targetFunction: string,
    targetAddress: string,
    parameter: Uint8Array,
    messages: ToasterMessage,
    coins = Mas.fromString('0'),
    fee?: bigint,
  ) {
    if (isOpPending) {
      throw new Error('Operation is already pending');
    }

    resetState();
    setIsPending(true);

    let loadingToastId: string | undefined;

    try {
      const { publicClient, provider } = await getClientAndProvider(account);

      // TODO - get minimal fee from the network used by the wallet. For now, we are using the massa default node.
      fee = await getMinimalFee(publicClient, fee);

      let maxGas = await gasEstimation(
        targetFunction,
        targetAddress,
        parameter,
        coins,
        fee,
      );

      const { operationId } = (await account.callSC(
        targetAddress,
        targetFunction,
        new Uint8Array(parameter),
        coins,
        fee,
        maxGas,
      )) as ITransactionDetails;

      setOpId(operationId);
      setIsOpPending(true);
      loadingToastId = showToast(
        'loading',
        messages.pending,
        operationId,
        isMainnet,
      );

      const op = new Operation(provider, operationId);
      const finalStatus = await op.waitSpeculativeExecution();

      toast.dismiss(loadingToastId);
      setIsPending(false);
      setIsOpPending(false);

      if (finalStatus === OperationStatus.NotFound) {
        setIsError(true);
        showToast(
          'success',
          messages.timeout || Intl.t('steps.failed-timeout'),
          operationId,
        );
      } else if (
        ![OperationStatus.SpeculativeSuccess, OperationStatus.Success].includes(
          finalStatus,
        )
      ) {
        const errorMessage = `Operation failed with status: ${finalStatus}`;
        logSmartContractEvents(provider, operationId);
        throw new Error(errorMessage);
      } else {
        setIsSuccess(true);
        showToast('success', messages.success, operationId);
      }
    } catch (error) {
      console.error('Error during smart contract call:', error);
      setIsError(true);
      showToast('error', messages.error, opId);
    }
    return opId;
  }

  return {
    opId,
    isOpPending,
    isPending,
    isSuccess,
    isError,
    callSmartContract,
  };
}
