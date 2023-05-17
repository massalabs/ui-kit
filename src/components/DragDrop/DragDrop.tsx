// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

import { ComponentPropsWithoutRef } from "react";
import { FiArchive, FiCheckCircle } from "react-icons/fi";

export interface IDragDropProps extends ComponentPropsWithoutRef<"input"> {
  placeholder?: string;
  loaded?: boolean;
}

export function DragDrop(props: IDragDropProps) {
  const { placeholder, loaded = false } = props;

  const loadedClass = loaded ? "text-s-success" : "text-tertiary";

  return (
    <div data-testid="drag-drop" className="w-full">
      <label
        className={`flex justify-center w-full h-24 px-4 transition ${loadedClass}
                        bg-secondary rounded-lg appearance-none cursor-pointer`}
      >
        <span className="flex items-center space-x-2">
          {loaded ? (
            <FiCheckCircle className="w-12 h-12" />
          ) : (
            <FiArchive className="w-12 h-12" />
          )}
          <span className="pl-5 mas-body2">{placeholder}</span>
        </span>
        <input type="file" name="upload" className="hidden" />
      </label>
    </div>
  );
}
