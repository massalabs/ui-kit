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

  const typeToTextClass = {
    success: 'text-s-success',
    error: 'text-s-error',
    loading: 'text-f-primary',
    blank: 'text-f-primary',
    custom: 'text-f-primary',
  };

  let content;
  if (typeof t.message === 'string') {
    content = t.message;
  } else {
    if (!t.message) return null;
    content = (t.message as CallableFunction)().props.children;
  }

  const textClassName = typeToTextClass[t.type];

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
        className={`flex items-center w-fit p-4 rounded-lg shadow-2xl
          bg-secondary ${textClassName}`}
        {...rest}
      >
        <div
          className={`inline-flex items-center justify-center flex-shrink-0
            w-10 h-10`}
        >
          {toastIcons[t.type]}
        </div>
        <div className="ml-3 text-sm font-normal pr-2">{content}</div>
        <Button variant="icon" onClick={() => toast.dismiss(t.id)}>
          <FiX />
        </Button>
      </div>
    </Transition>
  );
}
