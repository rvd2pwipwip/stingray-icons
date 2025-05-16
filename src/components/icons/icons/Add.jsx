import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Add = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0C13.3284 0 14 0.671573 14 1.5V11H23.5C24.3284 11 25 11.6716 25 12.5C25 13.3284 24.3284 14 23.5 14H14V23.5C14 24.3284 13.3284 25 12.5 25C11.6716 25 11 24.3284 11 23.5V14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11H11V1.5C11 0.671573 11.6716 0 12.5 0Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
