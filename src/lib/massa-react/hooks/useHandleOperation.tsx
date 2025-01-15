import { useState } from 'react';
import { CHAIN_ID, Operation, OperationStatus } from '@massalabs/massa-web3';
import Intl from '../i18n';
import { toast } from '../../../components';
import { logSmartContractEvents, showToast } from '../utils';
import { ToasterMessage } from './types';
import { ERROR_STATUSES } from './const';

// TODO: Need to be refactored with the useWriteSmartContract.tsx
export function useHandleOperation() {
  const [state, setState] = useState({
    isOpPending: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    opId: undefined as string | undefined,
  });

  async function handleOperation(
    operation: Operation,
    messages: ToasterMessage,
    final = false,
  ): Promise<Operation | undefined> {
    const networkInfo = await operation.provider.networkInfos();
    const isMainnet = networkInfo.chainId === CHAIN_ID.Mainnet;

    if (state.isOpPending) {
      throw new Error('Operation is already pending');
    }

    setState({
      ...state,
      isOpPending: true,
      isPending: true,
      isSuccess: false,
      isError: false,
      opId: undefined,
    });

    try {
      setState((prev) => ({ ...prev, opId: operation.id }));

      const loadingToastId = showToast(
        'loading',
        messages.pending,
        operation.id,
        isMainnet,
      );

      const finalStatus = final
        ? await operation.waitFinalExecution()
        : await operation.waitSpeculativeExecution();

      dismissLoadingToast(loadingToastId);

      if (finalStatus === OperationStatus.NotFound) {
        handleOperationTimeout(messages.timeout, operation.id);
        throw new Error('Operation not found');
      } else if (ERROR_STATUSES.includes(finalStatus)) {
        logSmartContractEvents(operation.provider, operation.id);
        throw new Error(`Operation failed with status: ${finalStatus}`);
      } else {
        handleOperationSuccess(messages.success, operation.id);
        return operation;
      }
    } catch (error) {
      handleOperationError(error, messages.error, state.opId);
    } finally {
      setState((prev) => ({ ...prev, isOpPending: false, isPending: false }));
    }
  }

  function dismissLoadingToast(toastId?: string): void {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      console.warn('Attempted to dismiss a toast with undefined ID.');
    }
  }

  function handleOperationTimeout(
    timeoutMessage?: string,
    opId?: string,
  ): void {
    setState((prev) => ({ ...prev, isError: true }));
    showToast('error', timeoutMessage || Intl.t('steps.failed-timeout'), opId);
  }

  function handleOperationSuccess(successMessage: string, opId?: string): void {
    setState((prev) => ({ ...prev, isSuccess: true }));
    showToast('success', successMessage, opId);
  }

  function handleOperationError(
    error: unknown,
    errorMessage: string,
    opId?: string,
  ): void {
    console.error('Error during smart contract call:', error);
    setState((prev) => ({ ...prev, isError: true }));
    showToast('error', errorMessage, opId);
  }

  return {
    opId: state.opId,
    isOpPending: state.isOpPending,
    isPending: state.isPending,
    isSuccess: state.isSuccess,
    isError: state.isError,
    handleOperation,
  };
}
