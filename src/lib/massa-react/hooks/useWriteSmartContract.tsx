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
  JsonRPCClient,
  MAX_GAS_CALL,
  Operation,
  OperationStatus,
} from '@massalabs/massa-web3';

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
  const success = OperationStatus.SpeculativeSuccess || OperationStatus.Success;

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
    coins = BigInt(0),
  ): Promise<bigint> {
    try {
      const estimation = await account.readSc(
        targetAddress,
        targetFunction,
        parameter,
        coins,
        0n,
        MAX_GAS_CALL,
      );

      const gasCost = BigInt(estimation.info.gas_cost);
      return minBigInt(gasCost + (gasCost * 20n) / 100n, MAX_GAS_CALL);
    } catch (error) {
      console.error('Gas estimation failed:', error);
      throw new Error('Failed to estimate gas.');
    }
  }

  async function callSmartContract(
    targetFunction: string,
    targetAddress: string,
    parameter: Uint8Array,
    messages: ToasterMessage,
    coins = BigInt(0),
  ) {
    if (isOpPending) {
      throw new Error('Operation is already pending');
    }

    let loadingToastId: string | undefined;

    try {
      const publicClient = new JsonRPCClient(await provider.getNetwork());

      let maxGas = await gasEstimation(
        targetFunction,
        targetAddress,
        parameter,
        coins,
      );

      const { operationId } = (await account.callSC(
        targetAddress,
        targetFunction,
        new Uint8Array(parameter),
        coins,
        0n,
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

      const op = new Operation(publicClient, operationId);
      const finalStatus = await op.waitSpeculativeExecution();

      if (!success) {
        const errorMessage = `Operation failed with status: ${finalStatus}`;
        logSmartContractEvents(publicClient, operationId);
        throw new Error(errorMessage);
      }

      setIsSuccess(true);
      showToast('success', messages.success, operationId);
    } catch (error) {
      console.error('Error during smart contract call:', error);
      setIsError(true);
      showToast(
        'error',
        messages.timeout || Intl.t('steps.failed-timeout'),
        opId,
      );
    } finally {
      toast.dismiss(loadingToastId);
      resetState();
    }
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
