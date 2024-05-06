// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMinus, FiPlus } from 'react-icons/fi';

interface AccordionProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  customClass?: string;
  state?: boolean;
}

interface AccordionCategoryProps extends ComponentPropsWithoutRef<'div'> {
  categoryTitle: string | ReactNode;
  state?: boolean;
  isChild?: boolean;
  iconOpen?: ReactNode;
  iconClose?: ReactNode;
  customClass?: string;
}

interface AccordionContentProps extends ComponentPropsWithoutRef<'div'> {
  customClass?: string;
}

export function Accordion(props: AccordionProps) {
  const { title, children, customClass = '', state } = props;
  const [extend, setExtend] = useState(state || false);

  return (
    <div
      className={`rounded-lg text-neutral border border-tertiary bg-primary-30 w-full ${customClass}`}
      data-testid="accordion"
    >
      <div
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExtend(!extend)}
      >
        <p className="mas-menu-active">{title}</p>
        <div>
          {extend ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </div>
      </div>
      {extend && children}
    </div>
  );
}

export function AccordionCategory(props: AccordionCategoryProps) {
  const {
    categoryTitle,
    children,
    state,
    iconOpen,
    iconClose,
    isChild,
    customClass = '',
  } = props;
  const [active, setActive] = useState<boolean>(state || false);

  const baseIconClose = <FiMinus size={20} />;
  const baseIconOpen = <FiPlus size={20} />;

  const isNotChild = isChild === false;

  return (
    <div className="text-neutral">
      {isNotChild ? null : (
        <hr
          className="h-0.5 border-t-0 bg-transparent bg-gradient-to-r 
        from-transparent via-tertiary to-transparent opacity-100"
        />
      )}

      <div
        className={`flex w-full items-center justify-between p-5 cursor-pointer ${customClass}`}
        onClick={() => setActive(!active)}
      >
        <div className="mas-menu-default w-full">{categoryTitle}</div>
        <div>
          {active ? iconClose || baseIconClose : iconOpen || baseIconOpen}
        </div>
      </div>
      {active && children}
    </div>
  );
}

export function AccordionContent(props: AccordionContentProps) {
  const { children, customClass = '' } = props;
  return (
    <div className={`p-5 w-full mas-body2 text-info ${customClass}`}>
      {children}
    </div>
  );
}
