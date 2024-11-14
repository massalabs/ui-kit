import { useState } from 'react';
import { toast } from '../../../components';
import { logSmartContractEvents, showToast } from '../utils';
import Intl from '../i18n';
import { Operation, OperationStatus, Provider } from '@massalabs/massa-web3';

interface ToasterMessage {
  pending: string;
  success: string;
  error: string;
  timeout?: string;
}

export function useWriteSmartContract(account: Provider, isMainnet = false) {
  const [isOpPending, setIsOpPending] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [opId, setOpId] = useState<string>();

  async function callSmartContract(
    targetFunction: string,
    targetAddress: string,
    parameter: Uint8Array,
    messages: ToasterMessage,
    coins = 0n,
    fee?: bigint,
  ): Promise<Operation | undefined> {
    if (isOpPending) {
      throw new Error('Operation is already pending');
    }

    setIsOpPending(false);
    setIsSuccess(false);
    setIsError(false);
    setOpId(undefined);
    setIsPending(true);

    let loadingToastId: string | undefined;

    try {
      const operation = await account.callSC({
        func: targetFunction,
        target: targetAddress,
        parameter,
        coins,
        fee,
      });

      setOpId(operation.id);

      loadingToastId = showToast(
        'loading',
        messages.pending,
        operation.id,
        isMainnet,
      );

      const op = new Operation(account, operation.id);
      const finalStatus = await op.waitSpeculativeExecution();

      toast.dismiss(loadingToastId);

      setIsPending(false);
      setIsOpPending(false);

      if (finalStatus === OperationStatus.NotFound) {
        setIsError(true);
        showToast(
          'success',
          messages.timeout || Intl.t('steps.failed-timeout'),
          operation.id,
        );
      } else if (
        ![OperationStatus.SpeculativeSuccess, OperationStatus.Success].includes(
          finalStatus,
        )
      ) {
        logSmartContractEvents(account, operation.id);
        throw new Error(`Operation failed with status: ${finalStatus}`);
      } else {
        setIsSuccess(true);
        showToast('success', messages.success, operation.id);
      }

      return operation;
    } catch (error) {
      console.error('Error during smart contract call:', error);
      setIsError(true);
      showToast('error', messages.error, opId);
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
