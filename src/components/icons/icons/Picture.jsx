import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Picture = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H27C28.6569 0 30 1.34315 30 3V27C30 28.6569 28.6569 30 27 30H3C1.34315 30 0 28.6569 0 27V3ZM23 8C23 9.65685 21.6569 11 20 11C18.3431 11 17 9.65685 17 8C17 6.34315 18.3431 5 20 5C21.6569 5 23 6.34315 23 8ZM3 27H28L21.2927 19.6667L18.2439 23.3333L10.9268 16L3 27Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
