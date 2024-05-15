// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { MassaLogo, Tag } from '..';

interface MnsProps extends ComponentPropsWithoutRef<'div'> {
  mns: string;
  icon?: ReactNode;
}

export function Mns(props: MnsProps) {
  const { mns, icon, ...rest } = props;

  return (
    <div data-testid="mns" {...rest}>
      <Tag type="default">
        <div className="flex items-center gap-2">
          {icon || <MassaLogo size={24} />}
          <div>{`${mns}.massa`}</div>
        </div>
      </Tag>
    </div>
  );
}
