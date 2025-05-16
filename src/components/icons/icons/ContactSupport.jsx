import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const ContactSupport = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M28.5 13.83C28.5 5.595 22.11 0 15 0C7.965 0 1.5 5.475 1.5 13.92C0.6 14.43 0 15.39 0 16.5V19.5C0 21.15 1.35 22.5 3 22.5H4.5V13.35C4.5 7.545 9.195 2.85 15 2.85C20.805 2.85 25.5 7.545 25.5 13.35V24H13.5V27H25.5C27.15 27 28.5 25.65 28.5 24V22.17C29.385 21.705 30 20.79 30 19.71V16.26C30 15.21 29.385 14.295 28.5 13.83Z" fill="currentColor"/>
    <path d="M10.5 16.5C11.3284 16.5 12 15.8284 12 15C12 14.1716 11.3284 13.5 10.5 13.5C9.67157 13.5 9 14.1716 9 15C9 15.8284 9.67157 16.5 10.5 16.5Z" fill="currentColor"/>
    <path d="M19.5 16.5C20.3284 16.5 21 15.8284 21 15C21 14.1716 20.3284 13.5 19.5 13.5C18.6716 13.5 18 14.1716 18 15C18 15.8284 18.6716 16.5 19.5 16.5Z" fill="currentColor"/>
    <path d="M24 12.045C23.28 7.77 19.56 4.5 15.075 4.5C10.53 4.5 5.63995 8.265 6.02995 14.175C9.73495 12.66 12.525 9.36 13.32 5.34C15.285 9.285 19.32 12 24 12.045Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
