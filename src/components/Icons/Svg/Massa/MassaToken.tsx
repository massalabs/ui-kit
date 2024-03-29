// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';

interface SVGProps extends ComponentPropsWithoutRef<'div'> {
  size?: number;
  customClass?: string;
}

export function MassaToken(props: SVGProps) {
  let { size, customClass = '', ...rest } = props;

  return (
    <div
      className={`bg-primary w-fit rounded-full ${customClass}`}
      data-testid="svg-icon"
      {...rest}
    >
      <svg
        width={size ?? 40}
        height={size ?? 40}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8586 12.4839C14.0203 12.5813 14.2081 12.6373 14.4084 
        12.6373C15.0153 12.6373 15.5071 12.1265 15.5071 11.4963C15.5071 
        10.8661 15.0153 10.3553 14.4084 10.3553C13.8015 10.3553 13.3254 
        10.8504 13.3105 11.467H11.8704L11.2705 10.3884L10.6711 11.467H9.19659C9.18152 
        10.8504 8.69603 10.3553 8.09872 10.3553C7.5014 10.3553 7 10.8663 7 11.4963C7 12.1263 
        7.49186 12.6373 8.09872 12.6373C8.3107 12.6373 8.50846 12.5749 8.6763 12.467L9.39605 13.762L8.7894 
        14.8536L10.0019 14.852L10.7 16.1083C10.3846 16.3088 10.1741 16.6697 10.1741 17.082C10.1741 17.7122 
        10.666 18.223 11.2729 18.223C11.8797 18.223 12.3716 17.7122 12.3716 17.082C12.3716 16.668 12.1592 
        16.3053 11.8413 16.1054L12.5413 14.849L13.7506 14.8474L13.1469 13.762L13.8588 12.4839H13.8586ZM12.2502 
        13.2232L11.9504 13.7613L11.9574 13.7739H11.9434L11.6446 14.3102L11.2701 14.9823L10.8988 14.3142L10.5994 
        13.7756H10.5839L10.5915 13.7617L10.2928 13.2241L9.914 
        12.5425H11.2691L11.2707 12.5397L11.2724 12.5425H12.6292L12.25 
        13.2232H12.2502Z"
          fill="#1AE19D"
        />
        <path
          d="M13.7516 6.0129L8.75537 6L11.2498 10.3553L13.7516 6.0129Z"
          fill="#1AE19D"
        />
        <path
          d="M13.7517 14.806L16.1787 19.1613L18.6129 14.8189L13.7517 14.806Z"
          fill="#1AE19D"
        />
      </svg>
    </div>
  );
}
