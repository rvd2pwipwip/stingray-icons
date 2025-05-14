import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const NextSlide = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 -5.90104e-07 15 -1.31134e-06C6.75 -2.03258e-06 2.03258e-06 6.75 1.31134e-06 15C5.90104e-07 23.25 6.75 30 15 30ZM11.7 9.6C11.7 9.6 10.7 8.5 11.7 7.5C12.7 6.5 13.8 7.5 13.8 7.5L21.3 15L13.8 22.5C13.8 22.5 12.7 23.5 11.7 22.5C10.7 21.5 11.7 20.4 11.7 20.4L17.1 15L11.7 9.6Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
