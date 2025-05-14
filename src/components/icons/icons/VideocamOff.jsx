import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const VideocamOff = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M32 7.57895L25.2632 14.3158V8.42106C25.2632 7.49474 24.5053 6.73685 23.579 6.73685H13.1705L32 25.5663V7.57895ZM2.13895 0L0 2.13895L4.5979 6.73685H3.36842C2.44211 6.73685 1.68421 7.49474 1.68421 8.42106V25.2632C1.68421 26.1895 2.44211 26.9474 3.36842 26.9474H23.579C23.9326 26.9474 24.2358 26.8126 24.4884 26.6442L29.8611 32L32 29.8611L2.13895 0Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
