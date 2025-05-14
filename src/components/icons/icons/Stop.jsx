import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Stop = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M24 1C24 0.447715 23.5523 0 23 0H1C0.447715 0 0 0.447716 0 1V23C0 23.5523 0.447716 24 1 24H23C23.5523 24 24 23.5523 24 23V1Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
