import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const AllChatRead = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M23.2875 27L18.2625 21.975L19.8375 20.4L23.2875 23.8125L29.925 17.175L31.5 18.7875L23.2875 27ZM0 30V2.25C0 1.675 0.225 1.15625 0.675 0.69375C1.125 0.23125 1.65 0 2.25 0H27.75C28.325 0 28.8438 0.23125 29.3063 0.69375C29.7688 1.15625 30 1.675 30 2.25V13.875H15.375V24H6L0 30Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
