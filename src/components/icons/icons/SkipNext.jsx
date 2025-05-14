import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SkipNext = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M20.1246 14.3478C20.7295 13.9445 20.7295 13.0555 20.1246 12.6523L1.58404 0.291872C0.906946 -0.159524 2.2323e-06 0.325855 2.16116e-06 1.13962L0 25.8604C-7.11416e-08 26.6741 0.906941 27.1595 1.58403 26.7081L20.1246 14.3478Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.434 0C24.1373 0 24.7075 0.570203 24.7075 1.27358V25.7264C24.7075 26.4298 24.1373 27 23.434 27C22.7306 27 22.1604 26.4298 22.1604 25.7264V1.27358C22.1604 0.570203 22.7306 0 23.434 0Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
