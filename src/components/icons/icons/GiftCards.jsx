import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const GiftCards = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M27 6H23.73C23.895 5.535 24 5.025 24 4.5C24 2.01 21.99 0 19.5 0C17.925 0 16.56 0.81 15.75 2.025L15 3.03L14.25 2.01C13.44 0.81 12.075 0 10.5 0C8.01 0 6 2.01 6 4.5C6 5.025 6.105 5.535 6.27 6H3C1.335 6 0.015 7.335 0.015 9L0 25.5C0 27.165 1.335 28.5 3 28.5H27C28.665 28.5 30 27.165 30 25.5V9C30 7.335 28.665 6 27 6ZM19.5 3C20.325 3 21 3.675 21 4.5C21 5.325 20.325 6 19.5 6C18.675 6 18 5.325 18 4.5C18 3.675 18.675 3 19.5 3ZM10.5 3C11.325 3 12 3.675 12 4.5C12 5.325 11.325 6 10.5 6C9.675 6 9 5.325 9 4.5C9 3.675 9.675 3 10.5 3ZM27 25.5H3V22.5H27V25.5ZM27 18H3V9H10.62L7.5 13.245L9.93 15L15 8.1L20.07 15L22.5 13.245L19.38 9H27V18Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
