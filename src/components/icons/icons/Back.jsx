import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Back = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6339 0.366117C13.122 0.854272 13.122 1.64573 12.6339 2.13388L3.01777 11.75L12.6339 21.3661C13.122 21.8543 13.122 22.6457 12.6339 23.1339C12.1457 23.622 11.3543 23.622 10.8661 23.1339L0.366117 12.6339C-0.122039 12.1457 -0.122039 11.3543 0.366117 10.8661L10.8661 0.366117C11.3543 -0.122039 12.1457 -0.122039 12.6339 0.366117Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
