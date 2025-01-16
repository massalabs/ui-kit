import { useState } from 'react';
import { executeOperation } from '../utils/operationHandler';
import { Provider } from '@massalabs/massa-web3';
import { ToasterMessage } from './types';

interface State {
  isOpPending: boolean;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  opId?: string;
}

export function useWriteSmartContract(account: Provider, isMainnet = false) {
  const [state, setState] = useState<State>({
    isOpPending: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    opId: undefined,
  });

  async function callSmartContract(
    targetFunction: string,
    targetAddress: string,
    parameter: Uint8Array,
    messages: ToasterMessage,
    coins = 0n,
    fee?: bigint,
    final = false,
  ): Promise<void> {
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

      await executeOperation(operation, messages, final, isMainnet, setState);
    } catch (error) {
      setState((prev) => ({ ...prev, isOpPending: false, isPending: false }));
      throw error;
    }
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
