import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const VideoBackground = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M3 3H13.5V0H3C1.35 0 0 1.35 0 3V13.5H3V3ZM12 16.5L6 24H24L19.5 18L16.455 22.065L12 16.5ZM22.5 9.75C22.5 8.505 21.495 7.5 20.25 7.5C19.005 7.5 18 8.505 18 9.75C18 10.995 19.005 12 20.25 12C21.495 12 22.5 10.995 22.5 9.75ZM27 0H16.5V3H27V13.5H30V3C30 1.35 28.65 0 27 0ZM27 27H16.5V30H27C28.65 30 30 28.65 30 27V16.5H27V27ZM3 16.5H0V27C0 28.65 1.35 30 3 30H13.5V27H3V16.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
