import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Camera = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M15.0002 19.8C17.6512 19.8 19.8002 17.651 19.8002 15C19.8002 12.349 17.6512 10.2 15.0002 10.2C12.3492 10.2 10.2002 12.349 10.2002 15C10.2002 17.651 12.3492 19.8 15.0002 19.8Z" fill="currentColor"/>
    <path d="M10.5 0L7.755 3H3C1.35 3 0 4.35 0 6V24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V6C30 4.35 28.65 3 27 3H22.245L19.5 0H10.5ZM15 22.5C10.86 22.5 7.5 19.14 7.5 15C7.5 10.86 10.86 7.5 15 7.5C19.14 7.5 22.5 10.86 22.5 15C22.5 19.14 19.14 22.5 15 22.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
