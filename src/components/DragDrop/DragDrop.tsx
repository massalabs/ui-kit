// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

import { ComponentPropsWithoutRef, useState } from "react";
import { FiArchive, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

interface IDragDropProps extends ComponentPropsWithoutRef<"input"> {
  placeholder?: string;
  allowed?: string[];
}

// Jest fails with Enums
// https://github.com/kulshekhar/ts-jest/issues/3397
// this would be Status enum { NORMAL = "normal", ...}
const NORMAL = "normal";
const FAILED = "failed";
const LOADED = "loaded";
const Status = { NORMAL, FAILED, LOADED };

const LoadedStatus = {
  normal: {
    style: "text-tertiary",
    icon: <FiArchive className="w-12 h-12" />,
  },
  failed: {
    style: "text-s-error",
    icon: <FiAlertCircle className="w-12 h-12" />,
  },
  loaded: {
    style: "text-s-success",
    icon: <FiCheckCircle className="w-12 h-12" />,
  },
};

export function DragDrop(props: IDragDropProps) {
  const { placeholder, allowed = [".yaml"] } = props;

  const [isLoaded, setIsLoaded] = useState(Status.NORMAL);
  const [fileName, setFileName] = useState(placeholder);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const loadedClass = LoadedStatus[isLoaded].style;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const loadedIcon = LoadedStatus[isLoaded].icon;

  function isValidFile(file: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!allowed.includes(file.split(".").pop())) {
      setIsLoaded(Status.FAILED);
      setFileName(`Owh! File not allowed. Allowed: ${allowed.toString()}`);
      return false;
    }
    return true;
  }

  function dropHandler(e: {
    preventDefault: () => void;
    dataTransfer: { items: any; files: any };
  }) {
    e.preventDefault();

    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item) => {
        if (item.kind === "file") {
          const file = item.getAsFile();

          if (!isValidFile(file.name.toLowerCase() || "")) {
            return;
          } else {
            setIsLoaded(Status.LOADED);
            setFileName(file.name);
          }
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file) => {
        if (!isValidFile(file.name.toLowerCase())) {
          return;
        } else {
          setIsLoaded(Status.LOADED);
          setFileName(file.name);
        }
      });
    }
  }

  function dragOverHandler(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <div
      data-testid="drag-drop"
      className="w-full"
      id="drop_zone"
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
    >
      <label
        className={`flex justify-center w-full h-24 px-4 transition ${loadedClass}
                        bg-secondary rounded-lg appearance-none cursor-pointer`}
      >
        <span className="flex items-center space-x-2">
          {loadedIcon}
          <span className="pl-5 mas-body2">{fileName}</span>
        </span>
        <input accept="*.yaml" type="file" name="upload" className="hidden" />
      </label>
    </div>
  );
}
