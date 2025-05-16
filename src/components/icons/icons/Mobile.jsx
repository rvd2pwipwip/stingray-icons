import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Mobile = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M2.04545 30C1.5 30 1.02273 29.7955 0.613636 29.3864C0.204545 28.9773 0 28.5 0 27.9545V2.04545C0 1.5 0.204545 1.02273 0.613636 0.613636C1.02273 0.204545 1.5 0 2.04545 0H17.0455C17.5909 0 18.0682 0.204545 18.4773 0.613636C18.8864 1.02273 19.0909 1.5 19.0909 2.04545V27.9545C19.0909 28.5 18.8864 28.9773 18.4773 29.3864C18.0682 29.7955 17.5909 30 17.0455 30H2.04545ZM2.04545 24.8864H17.0455V5.11364H2.04545V24.8864Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
