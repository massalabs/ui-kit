// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Tag, tagTypes } from '../../../../components';
import Intl from '../../i18n';

export function Connected() {
  return (
    <Tag type={tagTypes.success}>{Intl.t('connect-wallet.tag.connected')}</Tag>
  );
}
