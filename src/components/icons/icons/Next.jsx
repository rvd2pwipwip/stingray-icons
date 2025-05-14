import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Next = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.366116 23.1339C-0.122039 22.6457 -0.122039 21.8543 0.366117 21.3661L9.98223 11.75L0.366118 2.13388C-0.122037 1.64573 -0.122037 0.854272 0.366118 0.366116C0.854274 -0.122039 1.64573 -0.122039 2.13389 0.366117L12.6339 10.8661C13.122 11.3543 13.122 12.1457 12.6339 12.6339L2.13388 23.1339C1.64573 23.622 0.854272 23.622 0.366116 23.1339Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
