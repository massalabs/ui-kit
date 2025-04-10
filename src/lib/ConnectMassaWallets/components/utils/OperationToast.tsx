// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import Intl from '../../i18n';
import { generateExplorerLink } from '../../..';

type OperationToastProps = {
  title: string;
  operationId?: string;
  isMainnet?: boolean;
};

export function OperationToast({
  title,
  operationId,
  isMainnet,
}: OperationToastProps) {
  return (
    <div className="inline-flex mas-h2 text-center items-between justify-center">
      <p className="mas-body mr-4">{title}</p>
      {operationId && (
        <a
          href={generateExplorerLink(operationId, isMainnet)}
          target="_blank"
          rel="noreferrer"
          className="mas-caption underline self-center mr-3"
        >
          {Intl.t('toast.explorer')}
        </a>
      )}
    </div>
  );
}
