import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const VideoBckgON = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667ZM9.83333 18.3L13.3333 22.5167L18.5 15.8667C18.8333 15.4333 19.5 15.4333 19.8333 15.8833L25.6833 23.6833C26.1 24.2333 25.7 25.0167 25.0167 25.0167H5.03333C4.33333 25.0167 3.95 24.2167 4.38333 23.6667L8.53333 18.3333C8.85 17.9 9.48333 17.8833 9.83333 18.3Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
