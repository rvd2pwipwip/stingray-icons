import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const CheckedSquare = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M30 0H0V30H30V0ZM25.3674 11.1261C26.1735 10.3709 26.2147 9.10526 25.4595 8.29921C24.7043 7.49316 23.4386 7.45195 22.6326 8.20717L11.9038 18.2593L8.36744 14.9459C7.56139 14.1907 6.29573 14.2319 5.54052 15.038C4.7853 15.844 4.8265 17.1097 5.63256 17.8649L10.5364 22.4595C11.3056 23.1802 12.5021 23.1802 13.2713 22.4595L25.3674 11.1261Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
