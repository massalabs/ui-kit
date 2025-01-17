import { useState } from 'react';
import { CHAIN_ID, Operation } from '@massalabs/massa-web3';
import { ToasterMessage } from './types';
import {
  processOperation,
  OperationState,
  updateOpState,
} from '../utils/operationHandler';

export function useHandleOperation() {
  const [state, setState] = useState<OperationState>({
    isOpPending: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    opId: undefined,
  });

  async function handleOperation(
    operation: Operation,
    messages: ToasterMessage,
    final = false,
  ): Promise<void> {
    const { chainId } = await operation.provider.networkInfos();
    const isMainnet = chainId === CHAIN_ID.Mainnet;

    if (state.isOpPending) {
      throw new Error('Operation is already pending');
    }

    updateOpState(setState, {
      isOpPending: true,
      isPending: true,
      isSuccess: false,
      isError: false,
      opId: undefined,
    });

    await processOperation(operation, messages, final, isMainnet, setState);
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
