// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface TagProps {
  type: string;
  content: string;
  customClass?: string;
}

export function Tag(props: TagProps) {
  const { content, type, customClass } = props;

  let isInfo = type === 'info';

  let typeColor = isInfo ? 'text-s-info-1' : `text-s-${type}`;
  let backgroundClass = isInfo ? 'bg-s-info-1' : `bg-s-${type}`;

  return (
    <p
      className={`${backgroundClass} rounded-full w-fit px-3 pb-0.5
                  bg-opacity-30 ${typeColor} ${customClass}`}
    >
      {content}
    </p>
  );
}
