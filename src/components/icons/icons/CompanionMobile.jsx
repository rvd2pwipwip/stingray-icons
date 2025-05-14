import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const CompanionMobile = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M2.14286 34C1.57143 34 1.07143 33.7682 0.642857 33.3045C0.214285 32.8409 0 32.3 0 31.6818V2.31818C0 1.7 0.214285 1.15909 0.642857 0.695455C1.07143 0.231818 1.57143 0 2.14286 0H17.8571C18.4286 0 18.9286 0.231818 19.3571 0.695455C19.7857 1.15909 20 1.7 20 2.31818V31.6818C20 32.3 19.7857 32.8409 19.3571 33.3045C18.9286 33.7682 18.4286 34 17.8571 34H2.14286ZM3.14286 31H16.8571V3H3.14286V31Z" fill="currentColor"/>
    <path d="M11.5 5.5C11.5 6.32843 10.8284 7 10 7C9.17157 7 8.5 6.32843 8.5 5.5C8.5 4.67157 9.17157 4 10 4C10.8284 4 11.5 4.67157 11.5 5.5Z" fill="currentColor"/>
    <path d="M6 28C6 27.4477 6.44772 27 7 27H13C13.5523 27 14 27.4477 14 28C14 28.5523 13.5523 29 13 29H7C6.44772 29 6 28.5523 6 28Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
