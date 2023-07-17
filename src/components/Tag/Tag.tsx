// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface SpinerProps {
  tagType: string;
  text: string;
  customClass?: string;
}

export function Tag(props: SpinerProps) {
  const { text, tagType } = props;
  let theme: string;
  switch (tagType) {
    case 'success':
      theme = 's-success';
      break;
    case 'error':
      theme = 's-error';
      break;
    default:
      theme = 'baby-blue';
      break;
  }

  return (
    <div
      className={`bg-${theme} bg-opacity-30 text-${theme} 
      rounded-full inline-flex justify-center items-center px-3 py-0.5`}
    >
      {text}
    </div>
  );
}
