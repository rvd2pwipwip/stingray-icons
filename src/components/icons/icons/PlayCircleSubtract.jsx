import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const PlayCircleSubtract = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM12.8 21.15C12.4704 21.3972 12 21.162 12 20.75V9.25C12 8.83798 12.4704 8.60279 12.8 8.85L20.4667 14.6C20.7333 14.8 20.7333 15.2 20.4667 15.4L12.8 21.15Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
