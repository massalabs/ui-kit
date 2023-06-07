// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ComponentPropsWithoutRef } from 'react';

export type RadioButtonProps = ComponentPropsWithoutRef<'div'>;

export function RadioButton(props: RadioButtonProps) {
  let { ...rest } = props;

  return (
    <div data-testid="radio-button">
      <div className="inline-flex items-center">
        <label className="relative flex cursor-pointer items-center rounded-full p-3">
          <input
            type="radio"
            className={`peer relative h-5 w-5
                    cursor-pointer appearance-none rounded-full
                    border-2 border-gray-400 checked:border-brand`}
            {...rest}
          />
          <div
            className={`pointer-events-none absolute top-2/4 left-2/4
                      -translate-y-2/4 -translate-x-2/4 bg-brand
                      w-2.5 h-2.5 rounded-full opacity-0
                      transition-opacity peer-checked:opacity-100`}
          ></div>
        </label>
      </div>
    </div>
  );
}
