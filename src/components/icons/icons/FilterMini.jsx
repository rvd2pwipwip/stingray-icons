import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const FilterMini = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M28 15C28 7.82429 22.1757 2 15 2C7.82429 2 2 7.82429 2 15C2 22.1757 7.82429 28 15 28C22.1757 28 28 22.1757 28 15ZM30 15C30 23.2803 23.2803 30 15 30C6.71972 30 0 23.2803 0 15C0 6.71972 6.71972 0 15 0C23.2803 0 30 6.71972 30 15Z" fill="currentColor"/>
    <path d="M9.9616 11H19.9616L14.9516 17.3L9.9616 11ZM7.2116 10.61C9.2316 13.2 12.9616 18 12.9616 18V23C12.9616 23.55 13.4116 24 13.9616 24H15.9616C16.5116 24 16.9616 23.55 16.9616 23V18C16.9616 18 20.6816 13.2 22.7016 10.61C23.2116 9.95 22.7416 9 21.9116 9H8.0016C7.1716 9 6.7016 9.95 7.2116 10.61Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
