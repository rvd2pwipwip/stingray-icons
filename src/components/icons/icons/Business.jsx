import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Business = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M15 6V0H0V27H30V6H15ZM6 24H3V21H6V24ZM6 18H3V15H6V18ZM6 12H3V9H6V12ZM6 6H3V3H6V6ZM12 24H9V21H12V24ZM12 18H9V15H12V18ZM12 12H9V9H12V12ZM12 6H9V3H12V6ZM27 24H15V21H18V18H15V15H18V12H15V9H27V24ZM24 12H21V15H24V12ZM24 18H21V21H24V18Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
