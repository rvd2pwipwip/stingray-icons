import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Laptop = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M5 2.5H27.5V0H5C3.625 0 2.5 1.125 2.5 2.5V16.25H0V20H17.5V16.25H5V2.5ZM28.75 5H21.25C20.5625 5 20 5.5625 20 6.25V18.75C20 19.4375 20.5625 20 21.25 20H28.75C29.4375 20 30 19.4375 30 18.75V6.25C30 5.5625 29.4375 5 28.75 5ZM27.5 16.25H22.5V7.5H27.5V16.25Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
