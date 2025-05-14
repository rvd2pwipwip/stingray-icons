import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SkipPrevious = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M4.58294 12.6522C3.97801 13.0555 3.97801 13.9445 4.58294 14.3477L23.1235 26.7081C23.8006 27.1595 24.7075 26.6741 24.7075 25.8604L24.7075 1.13963C24.7075 0.32586 23.8006 -0.15952 23.1235 0.291875L4.58294 12.6522Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1.27358 27C0.570203 27 -6.14911e-08 26.4298 0 25.7264L2.13773e-06 1.27358C2.19923e-06 0.570204 0.570206 -6.14916e-08 1.27359 0C1.97697 6.14916e-08 2.54717 0.570204 2.54717 1.27359L2.54717 25.7264C2.54717 26.4298 1.97697 27 1.27358 27Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
