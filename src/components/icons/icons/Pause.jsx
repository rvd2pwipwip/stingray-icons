import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Pause = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M7.19998 1C7.19998 0.447715 6.75227 0 6.19998 0H1C0.447715 0 0 0.447715 0 0.999999V27C0 27.5523 0.447715 28 1 28H6.19998C6.75227 28 7.19998 27.5523 7.19998 27V1Z" fill="currentColor"/>
    <path d="M20 1.00001C20 0.447722 19.5523 6.42847e-06 19 6.42847e-06H13.8C13.2477 6.42847e-06 12.8 0.447721 12.8 1.00001V27C12.8 27.5523 13.2477 28 13.8 28H19C19.5523 28 20 27.5523 20 27V1.00001Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
