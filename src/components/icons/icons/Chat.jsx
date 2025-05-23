import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Chat = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M28.5 6H25.5V19.5H6V22.5C6 23.325 6.675 24 7.5 24H24L30 30V7.5C30 6.675 29.325 6 28.5 6ZM22.5 15V1.5C22.5 0.675 21.825 0 21 0H1.5C0.675 0 0 0.675 0 1.5V22.5L6 16.5H21C21.825 16.5 22.5 15.825 22.5 15Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
