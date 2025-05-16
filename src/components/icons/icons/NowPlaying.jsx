import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const NowPlaying = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 12C3.10457 12 4 12.8954 4 14V26C4 27.1046 3.10457 28 2 28C0.89543 28 0 27.1046 0 26V14C0 12.8954 0.89543 12 2 12Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 5C8.60457 5 9.5 5.89543 9.5 7V26C9.5 27.1046 8.60457 28 7.5 28C6.39543 28 5.5 27.1046 5.5 26V7C5.5 5.89543 6.39543 5 7.5 5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.5 0C14.6046 0 15.5 0.89543 15.5 2V26C15.5 27.1046 14.6046 28 13.5 28C12.3954 28 11.5 27.1046 11.5 26V2C11.5 0.89543 12.3954 0 13.5 0Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.5 14C20.6046 14 21.5 14.8954 21.5 16V26C21.5 27.1046 20.6046 28 19.5 28C18.3954 28 17.5 27.1046 17.5 26V16C17.5 14.8954 18.3954 14 19.5 14Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M25.5 7C26.6046 7 27.5 7.89543 27.5 9V26C27.5 27.1046 26.6046 28 25.5 28C24.3954 28 23.5 27.1046 23.5 26V9C23.5 7.89543 24.3954 7 25.5 7Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
