import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Remove = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0H28C29.1046 0 30 0.89543 30 2C30 3.10457 29.1046 4 28 4H2C0.89543 4 0 3.10457 0 2Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
