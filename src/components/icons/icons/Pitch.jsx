import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Pitch = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M12.5124 0H10.7867V20.2488C9.06094 19.3284 6.41479 19.5585 3.99874 20.9391C0.777342 22.7799 -0.833357 26.1163 0.432192 28.1872C1.69774 30.3732 5.26429 30.6033 8.48569 28.7625C11.0168 27.2668 12.5124 24.9658 12.5124 23.01V9.54915C14.8134 10.1244 18.7251 12.8856 15.8489 18.9832C15.6188 19.3284 16.194 19.5585 16.3091 19.3284C18.8402 16.222 18.8402 12.0802 16.9994 8.85885C14.8134 5.2923 12.5124 2.5311 12.5124 0Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
