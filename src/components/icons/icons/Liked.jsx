import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Liked = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M14 26C13.7535 26 13.5169 25.9394 13.2901 25.8182C0.640845 18.7467 0 10.6751 0 9.1295C0 4.3007 2.77042 0.653841 6.89155 0.0578168C9.95775 -0.396778 12.4521 1.9166 14 3.93702C15.5479 1.9166 18.0423 -0.396778 21.1084 0.0578168C25.2296 0.663943 28 4.3108 28 9.1295C28 10.6751 27.3592 18.7467 14.7099 25.8182C14.4831 25.9394 14.2465 26 14 26Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
