import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const PlayPlayer = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M22.2149 11.3349C24.5951 12.9217 24.595 16.4192 22.2149 18.006L6.23251 28.6609C3.56843 30.437 -2.38944e-07 28.5272 0 25.3254L1.91155e-06 4.01555C1.91155e-06 0.81372 3.56844 -1.09603 6.23251 0.68002L22.2149 11.3349ZM4.56474 3.18167C3.89872 2.73766 3.00661 3.2151 3.00661 4.01555V25.3254C3.00661 26.1258 3.89872 26.6033 4.56474 26.1593L20.5471 15.5044C21.1422 15.1077 21.1422 14.2333 20.5471 13.8366L4.56474 3.18167Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
