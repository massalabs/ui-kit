import { cloneElement, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

export function Tooltip({ ...props }) {
  const { content, customClass, ...rest } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const icon = <FiHelpCircle />;
  const clonedIcon = cloneElement(icon, {
    className: 'stroke-current text-neutral',
  });
  return (
    <div
      data-testid="tooltip"
      className="w-fit p-2 hover:cursor-pointer"
      {...rest}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {clonedIcon}
      {showTooltip && (
        <div
          className={`w-fit z-10 absolute bg-tertiary p-3 rounded-lg text-neutral ${customClass} ml-2`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
