import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { FiHelpCircle } from 'react-icons/fi';

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface TooltipProps extends ComponentPropsWithoutRef<'div'> {
  /** The content to display inside the tooltip */
  body: ReactNode;
  /** Optionally supply a custom trigger element. If omitted, a default help icon is used. */
  children?: ReactNode;
  /** Tailwind (or custom) classes to apply to the tooltip container */
  tooltipClassName?: string;
  /** Tailwind (or custom) classes to apply to the trigger element */
  triggerClassName?: string;
  /** Optionally override the default help icon color */
  iconColor?: string;
  /**
   * An offset to adjust the tooltip’s position relative to the trigger.
   * For example, { top: 5, left: 0 } adds 5px in the vertical direction.
   */
  offset?: { top?: number; left?: number };
  /** The placement of the tooltip relative to the trigger */
  placement?: Placement;
}

/**
 * Computes the base position (top, left) for the tooltip
 * relative to the trigger element’s bounding rect.
 */
function computePosition(
  rect: DOMRect,
  placement: Placement,
  offset: { top?: number; left?: number },
): { top: number; left: number } {
  const offTop = offset.top ?? 0;
  const offLeft = offset.left ?? 0;

  switch (placement) {
    case 'top':
      return {
        top: rect.top - offTop,
        left: rect.left + rect.width / 2 + offLeft,
      };
    case 'top-start':
      return {
        top: rect.top - offTop,
        left: rect.left + offLeft,
      };
    case 'top-end':
      return {
        top: rect.top - offTop,
        left: rect.right + offLeft,
      };
    case 'bottom':
      return {
        top: rect.bottom + offTop,
        left: rect.left + rect.width / 2 + offLeft,
      };
    case 'bottom-start':
      return {
        top: rect.bottom + offTop,
        left: rect.left + offLeft,
      };
    case 'bottom-end':
      return {
        top: rect.bottom + offTop,
        left: rect.right + offLeft,
      };
    case 'left':
      return {
        top: rect.top + rect.height / 2 + offTop,
        left: rect.left - offLeft,
      };
    case 'left-start':
      return {
        top: rect.top + offTop,
        left: rect.left - offLeft,
      };
    case 'left-end':
      return {
        top: rect.bottom + offTop,
        left: rect.left - offLeft,
      };
    case 'right':
      return {
        top: rect.top + rect.height / 2 + offTop,
        left: rect.right + offLeft,
      };
    case 'right-start':
      return {
        top: rect.top + offTop,
        left: rect.right + offLeft,
      };
    case 'right-end':
      return {
        top: rect.bottom + offTop,
        left: rect.right + offLeft,
      };
    default:
      // Fallback to "bottom"
      return {
        top: rect.bottom + offTop,
        left: rect.left + rect.width / 2 + offLeft,
      };
  }
}

/**
 * Returns a CSS transform string so that the tooltip is properly aligned
 * relative to the computed position.
 */
function getTransform(placement: Placement): string {
  switch (placement) {
    case 'top':
      return 'translate(-50%, -100%)';
    case 'top-start':
      return 'translate(0, -100%)';
    case 'top-end':
      return 'translate(-100%, -100%)';
    case 'bottom':
      return 'translate(-50%, 0)';
    case 'bottom-start':
      return 'translate(0, 0)';
    case 'bottom-end':
      return 'translate(-100%, 0)';
    case 'left':
      return 'translate(-100%, -50%)';
    case 'left-start':
      return 'translate(-100%, 0)';
    case 'left-end':
      return 'translate(-100%, -100%)';
    case 'right':
      return 'translate(0, -50%)';
    case 'right-start':
      return 'translate(0, 0)';
    case 'right-end':
      return 'translate(0, -100%)';
    default:
      return 'translate(-50%, 0)';
  }
}

/**
 * Utility function to merge default and additional classes.
 */
function mergeClasses(
  defaultClasses: string,
  additionalClasses?: string,
): string {
  return additionalClasses
    ? `${defaultClasses} ${additionalClasses}`
    : defaultClasses;
}

export const Tooltip: React.FC<TooltipProps> = ({
  body,
  children,
  tooltipClassName,
  triggerClassName,
  iconColor,
  offset = { top: 5, left: 0 },
  placement = 'bottom-start',
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const pos = computePosition(rect, placement, offset);
      setPosition(pos);
    }
    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  const defaultTrigger = (
    <FiHelpCircle className={iconColor ? iconColor : 'text-neutral'} />
  );

  return (
    <div
      data-testid="Tooltip"
      ref={triggerRef}
      {...rest}
      className={mergeClasses('w-fit hover:cursor-pointer', triggerClassName)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children || defaultTrigger}
      {visible &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: position.top,
              left: position.left,
              transform: getTransform(placement),
              zIndex: 1000,
            }}
            className={mergeClasses(
              'bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none',
              tooltipClassName,
            )}
          >
            {body}
          </div>,
          document.body,
        )}
    </div>
  );
};
