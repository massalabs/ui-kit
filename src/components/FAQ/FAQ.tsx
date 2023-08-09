// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMinus, FiPlus } from 'react-icons/fi';

interface IFAQ extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  title: string;
  customClass?: string;
  state?: boolean;
}

interface IFAQCategory extends ComponentPropsWithoutRef<'div'> {
  categoryTitle: string;
  state?: boolean;
}

export function FAQ(props: IFAQ) {
  const { title, children, customClass, state } = props;
  const [extend, setExtend] = useState(state || false);

  return (
    <div
      className={`rounded-lg text-neutral border border-tertiary bg-primary-30 w-full ${customClass}`}
      data-testid="faq"
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

export function FAQCategory(props: IFAQCategory) {
  const { categoryTitle, children, state } = props;
  const [active, setActive] = useState<boolean>(state || false);

  return (
    <div>
      <hr
        className="h-0.5 border-t-0 bg-transparent bg-gradient-to-r 
        from-transparent via-tertiary to-transparent opacity-100"
      />
      <div
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <p className="mas-menu-default">{categoryTitle}</p>
        <div>{active ? <FiMinus size={20} /> : <FiPlus size={20} />}</div>
      </div>
      {active && children}
    </div>
  );
}

export function FAQContent(props: ComponentPropsWithoutRef<'div'>) {
  const { children } = props;
  return <div className="px-5 pb-5 mas-body2 text-info">{children}</div>;
}
