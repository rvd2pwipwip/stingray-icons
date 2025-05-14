import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Checkmark = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M26.627 0.373024C27.1243 0.87039 27.1243 1.67678 26.627 2.17415L10.3251 18.476C9.82772 18.9734 9.02133 18.9734 8.52397 18.476L0.373023 10.3251C-0.124341 9.82772 -0.124341 9.02133 0.373023 8.52397C0.870389 8.0266 1.67678 8.0266 2.17415 8.52397L9.42453 15.7743L24.8259 0.373024C25.3232 -0.124342 26.1296 -0.124341 26.627 0.373024Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
