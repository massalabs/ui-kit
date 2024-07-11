import { useState } from 'react';
import { toast, ToastContent } from '../../../components';
import { OperationToast } from '../../ConnectMassaWallets/components/OperationToast';
import { logSmartContractEvents } from '../utils';
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
import { Toast } from 'react-hot-toast';

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
  isMainnet?: boolean,
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
    messages: ToasterMessage,
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

  function showToast(
    type: 'loading' | 'error' | 'success',
    message: string,
    operationId?: string,
    duration = 5000,
  ) {
    const content = (t: Toast) => (
      <ToastContent t={t}>
        <OperationToast
          isMainnet={isMainnet}
          title={message}
          operationId={operationId}
        />
      </ToastContent>
    );

    if (type === 'loading') {
      return toast.loading(content, { duration: Infinity });
    } else if (type === 'error') {
      toast.error(content, { duration });
    } else {
      toast.success(content, { duration });
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

      let maxGas: bigint;
      try {
        maxGas = await gasEstimation(
          targetFunction,
          targetAddress,
          parameter,
          coins,
        );
      } catch (error) {
        console.error('Gas estimation failed:', error);
        showToast('error', messages.error);
        return;
      }

      let operationId: string;
      try {
        const { operationId: opId } = (await account.callSC(
          targetAddress,
          targetFunction,
          new Uint8Array(parameter),
          coins,
          0n,
          maxGas,
        )) as ITransactionDetails;
        operationId = opId;
        setOpId(operationId);
        setIsOpPending(true);
      } catch (error) {
        console.error('Smart contract call failed:', error);
        showToast('error', 'Smart contract call failed.');
        return;
      }

      loadingToastId = showToast('loading', messages.pending, operationId);

      try {
        const op = new Operation(publicClient, operationId);
        const finalStatus = await op.waitFinalExecution();
        if (finalStatus !== OperationStatus.Success) {
          const errorMessage = `Operation failed with status: ${finalStatus}`;
          console.error(errorMessage);
          showToast('error', messages.error, operationId);
          logSmartContractEvents(publicClient, operationId);
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error('Operation execution failed:', error);
        showToast('error', messages.error, operationId);
        logSmartContractEvents(publicClient, operationId);
        return;
      }

      setIsSuccess(true);
      toast.dismiss(loadingToastId);
      showToast('success', messages.success, operationId);
    } catch (error) {
      console.error('Error during smart contract call:', error);
      setIsError(true);
      toast.dismiss(loadingToastId);
      showToast(
        'error',
        messages.timeout || Intl.t('steps.failed-timeout'),
        opId,
      );
    } finally {
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
