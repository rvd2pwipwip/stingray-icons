import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const AirPlay = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M25.8937 20.8575L23.2828 18.4322H29.5886V2.42529H2.42529V18.4322H8.73105L6.13078 20.8575H2C0.895429 20.8575 0 19.9621 0 18.8575V2C0 0.895433 0.895431 0 2 0H30C31.1046 0 32 0.895431 32 2V18.8575C32 19.9621 31.1046 20.8575 30 20.8575H25.8937ZM26.6724 24.4898H5.27859L15.9019 13.988L26.6724 24.4898Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
