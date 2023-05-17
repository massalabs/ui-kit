// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

import { ComponentPropsWithoutRef } from "react";
import { FiCircle } from "react-icons/fi";

export interface StepperProps extends ComponentPropsWithoutRef<"ol"> {
  steps: string[];
  step: number;
}

let baseStepClass =
  "flex items-center justify-center w-4 h-4 rounded-full shrink-0";

function StepIn() {
  return (
    <span
      data-testid="stepper-step-in"
      className={`${baseStepClass} bg-s-success`}
    >
      <FiCircle className="w-1 h-1 text-f-primary fill-i-primary" />
    </span>
  );
}

function StepNext() {
  return (
    <span
      data-testid="stepper-step-next"
      className={`${baseStepClass} border border-c-default bg-transparent`}
    >
      <FiCircle className="w-1 h-1 text-f-primary fill-i-primary" />
    </span>
  );
}

function StepPast() {
  return (
    <span
      data-testid="stepper-step-past"
      className={`${baseStepClass} bg-s-success`}
    ></span>
  );
}

export function Stepper(props: StepperProps) {
  const { step, steps } = props;

  const edgeClass = " w-full after:w-full after:border-b after:inline-block";
  const edgePastClass = edgeClass + " after:border-c-default";
  const edgeNextClass = edgeClass + " after:border-s-success";

  return (
    <ol className="flex items-center w-full" data-testid="stepper">
      {steps.map((s, idx) => {
        let isLastStep = idx === steps.length - 1;
        let stepClass = isLastStep ? "" : edgeClass;
        let flowClass = isLastStep ? "" : edgePastClass;
        let textClass = "text-f-primary";

        let currentStep = <StepNext />;

        if (idx === step) {
          currentStep = <StepIn />;
        } else if (idx < step) {
          currentStep = <StepPast />;
          textClass = "text-f-tertiary";
          flowClass = isLastStep ? "w-fit" : edgeNextClass;
        }

        return (
          <li
            data-testid={`stepper-item-${idx}`}
            key={idx}
            className={`flex items-center ${stepClass} ${flowClass}`}
          >
            {currentStep}
            <div
              className={`ml-1 min-w-fit mr-1 text-xs ${textClass}`}
              data-testid="stepper-label"
            >
              {s}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
