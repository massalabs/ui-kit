import { useState } from 'react';
import { toast } from '../../../components';
import { logSmartContractEvents, showToast } from '../utils';
import Intl from '../i18n';
import { Operation, OperationStatus, Provider } from '@massalabs/massa-web3';
import { ToasterMessage } from './types';
import { ERROR_STATUSES } from './const';

export function useWriteSmartContract(account: Provider, isMainnet = false) {
  const [state, setState] = useState({
    isOpPending: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    opId: undefined as string | undefined,
  });

  async function callSmartContract(
    targetFunction: string,
    targetAddress: string,
    parameter: Uint8Array,
    messages: ToasterMessage,
    coins = 0n,
    fee?: bigint,
    final = false,
  ): Promise<Operation | undefined> {
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
      const operation = await account.callSC({
        func: targetFunction,
        target: targetAddress,
        parameter,
        coins,
        fee,
      });

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
    callSmartContract,
  };
}
