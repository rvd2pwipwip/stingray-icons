import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Smiley = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M14.985 0C6.705 0 0 6.72 0 15C0 23.28 6.705 30 14.985 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 14.985 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27ZM20.25 13.5C21.495 13.5 22.5 12.495 22.5 11.25C22.5 10.005 21.495 9 20.25 9C19.005 9 18 10.005 18 11.25C18 12.495 19.005 13.5 20.25 13.5ZM9.75 13.5C10.995 13.5 12 12.495 12 11.25C12 10.005 10.995 9 9.75 9C8.505 9 7.5 10.005 7.5 11.25C7.5 12.495 8.505 13.5 9.75 13.5ZM15 23.25C18.495 23.25 21.465 21.06 22.665 18H7.335C8.535 21.06 11.505 23.25 15 23.25Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
