import { Operation, OperationStatus } from '@massalabs/massa-web3';
import { toast } from '../../../components';
import { ERROR_STATUSES } from '../hooks/const';
import { ToasterMessage } from '../hooks/types';
import { showToast, logSmartContractEvents } from '.';

export type OperationState = {
  isOpPending: boolean;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  opId?: string;
};

export async function processOperation(
  operation: Operation,
  messages: ToasterMessage,
  final: boolean,
  isMainnet: boolean | undefined,
  setState: React.Dispatch<React.SetStateAction<OperationState>>,
): Promise<void> {
  try {
    updateOpState(setState, { opId: operation.id });

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
      handleOperationTimeout(messages.timeout, operation.id, setState);
      throw new Error('Operation not found');
    } else if (ERROR_STATUSES.includes(finalStatus)) {
      logSmartContractEvents(operation.provider, operation.id);
      throw new Error(`Operation failed with status: ${finalStatus}`);
    } else {
      handleOperationSuccess(messages.success, operation.id, setState);
    }
  } catch (error) {
    if (error instanceof Error) {
      handleOperationError(error, messages.error, operation.id, setState);
    }
    throw error;
  } finally {
    updateOpState(setState, { isOpPending: false, isPending: false });
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
  message = '',
  opId: string,
  setState: React.Dispatch<React.SetStateAction<OperationState>>,
): void {
  setState((prev: OperationState) => ({ ...prev, isError: true }));
  showToast('error', message, opId);
}

function handleOperationSuccess(
  message: string,
  opId: string,
  setState: React.Dispatch<React.SetStateAction<OperationState>>,
): void {
  setState((prev) => ({ ...prev, isSuccess: true }));
  showToast('success', message, opId);
}

function handleOperationError(
  error: Error,
  message: string,
  opId: string,
  setState: React.Dispatch<React.SetStateAction<OperationState>>,
): void {
  console.error(error);
  setState((prev) => ({ ...prev, isError: true }));
  showToast('error', message, opId);
}

function updateOpState<State>(
  setState: React.Dispatch<React.SetStateAction<State>>,
  partialState: Partial<State>,
) {
  setState((prevState) => ({
    ...prevState,
    ...partialState,
  }));
}
