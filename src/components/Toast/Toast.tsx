// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { toast as _toast, Toaster, Toast as ToastType } from 'react-hot-toast';
import { ComponentPropsWithoutRef } from 'react';
import { FiX, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';
import { Button } from '../Button';
import { Transition } from '@headlessui/react';
import { Spinner } from '../Spinner';

export interface ToastProps {
  durationMs?: number;
}

const defaultDurationMs = 10000;

export const toast = _toast;

export function Toast(props: ToastProps) {
  const { durationMs } = props;

  return (
    <div data-testid="toast">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: durationMs ?? defaultDurationMs,
        }}
      >
        {(t) => <ToastContent t={t} />}
      </Toaster>
    </div>
  );
}

interface ToastContentProps extends ComponentPropsWithoutRef<'div'> {
  t: ToastType;
}

export function ToastContent(props: ToastContentProps) {
  const { t, ...rest } = props;

  const toastIcons = {
    success: <FiCheckCircle size={24} />,
    error: <FiAlertCircle size={24} />,
    loading: <Spinner />,
    blank: <FiInfo size={24} />,
    custom: t.icon ?? <FiInfo size={24} />,
  };

  const toastTypeToThemeState = {
    success: 's-success',
    error: 's-error',
    loading: 'f-secondary',
    blank: 'f-secondary',
    custom: 'f-secondary',
  };

  const toastTypeToBGThemeState = {
    success: 's-success',
    error: 's-error',
    loading: 'info',
    blank: 'info',
    custom: 'info',
  };

  const state = toastTypeToThemeState[t.type];

  let content;
  if (typeof t.message === 'string') {
    content = t.message;
  } else {
    if (!t.message) return;
    content = (t.message as CallableFunction)().props.children;
  }

  const divStateClassNames = ` text-${state} bg-${
    toastTypeToBGThemeState[t.type]
  } bg-opacity-25 rounded-lg`;

  return (
    <Transition
      appear
      show={t.visible}
      className="transform transition-all duration-200"
      enter="transition ease-in-out transform"
      enterFrom="-translate-y-0"
      enterTo="translate-y-full"
      leave="transition ease-in-out transform"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="theme-dark flex items-center w-fit p-4 text-f-primary bg-c-default rounded-lg shadow"
        {...rest}
      >
        <div
          className={`inline-flex items-center justify-center flex-shrink-0
            w-10 h-10 ${divStateClassNames}`}
        >
          {toastIcons[t.type]}
        </div>
        <div className={`ml-3 text-sm font-normal pr-2 text-${state}`}>
          {content}
        </div>
        <Button
          customClass="theme-light"
          variant="icon"
          onClick={() => toast.dismiss(t.id)}
        >
          <FiX />
        </Button>
      </div>
    </Transition>
  );
}
