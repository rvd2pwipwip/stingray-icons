import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const DocumentRev = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M3 0C1.35 0 0.0150003 1.35 0.0150003 3L0 27C0 28.65 1.335 30 2.985 30H21C22.65 30 24 28.65 24 27V9L15 0H3ZM13.5 10.5V2.25L21.75 10.5H13.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
