import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Down = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M17.7162 1.28378L9.5 9.5L1.28378 1.28378" stroke="black" stroke- stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </IconWrapper>
);
