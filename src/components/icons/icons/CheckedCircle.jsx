import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const CheckedCircle = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM24.02 10.8L11.9 22.12C11.61 22.39 11.24 22.52 10.88 22.52C10.51 22.52 10.15 22.39 9.86 22.12L4.99 17.59C4.38 17.03 4.35 16.08 4.91 15.47C5.48 14.86 6.42 14.83 7.03 15.39L10.87 18.96L21.97 8.61C22.57 8.04 23.52 8.08 24.09 8.68C24.65 9.29 24.62 10.24 24.02 10.8Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
