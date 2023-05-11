import { useState, ComponentPropsWithoutRef, ReactNode } from "react";

export interface TabInterface extends ComponentPropsWithoutRef<"div"> {
  leftTabText: string;
  rightTabText: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function Tab({ ...props }) {
  let { leftTabText, rightTabText, children, ...rest } = props;
  const [active, setActive] = useState(false);

  function handleActiveState() {
    setActive(!active);
  }
  const clickedDivClass1 = !active ? ` default-tab-active` : `default-tab`;
  const clickedDivClass2 = active ? ` default-tab-active` : `default-tab`;

  const hoverDivClass = ` default-tab-hover`;
  const pressedDivClass = `default-tab-pressed `;

  return (
    <div className="w-full flex flex-col" data-testid="tab-selector" {...rest}>
      <div className="w-full flex flex-row">
        <div
          className={`default-tab
                      ${hoverDivClass}
                      ${clickedDivClass1} 
                      ${pressedDivClass}
                      `}
          onClick={handleActiveState}
        >
          <p>{leftTabText}</p>
        </div>
        <div
          className={`default-tab
                    ${hoverDivClass}
                    ${clickedDivClass2}
                    ${pressedDivClass}
                    `}
          onClick={handleActiveState}
        >
          <p>{rightTabText}</p>
        </div>
      </div>
    </div>
  );
}
