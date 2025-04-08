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
  isMainnet: boolean,
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
      handleOperationSuccess(
        messages.success,
        operation.id,
        setState,
        isMainnet,
      );
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
  updateOpState(setState, { isError: true });
  showToast('error', message, opId);
}

function handleOperationSuccess(
  message: string,
  opId: string,
  setState: React.Dispatch<React.SetStateAction<OperationState>>,
  isMainnet = false,
): void {
  updateOpState(setState, { isSuccess: true });
  showToast('success', message, opId, isMainnet);
}

function handleOperationError(
  error: Error,
  message: string,
  opId: string,
  setState: React.Dispatch<React.SetStateAction<OperationState>>,
): void {
  console.error(error);
  updateOpState(setState, { isError: true });
  showToast('error', message, opId);
}

export function updateOpState<State>(
  setState: React.Dispatch<React.SetStateAction<State>>,
  partialState: Partial<State>,
) {
  setState((prevState) => ({
    ...prevState,
    ...partialState,
  }));
}
