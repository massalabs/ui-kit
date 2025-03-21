// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import Intl from '../../i18n';
import { Tag, tagTypes } from '../../../../components';

export function Disconnected() {
  return (
    <Tag type={tagTypes.error}>
      {Intl.t('connect-wallet.tag.not-connected')}
    </Tag>
  );
}
