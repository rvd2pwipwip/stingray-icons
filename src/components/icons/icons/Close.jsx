import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Close = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.373906 23.6261C-0.124635 23.1276 -0.124635 22.3193 0.373906 21.8207L10.1946 12L0.373908 2.17929C-0.124634 1.68074 -0.124633 0.872448 0.373908 0.373906C0.87245 -0.124635 1.68075 -0.124635 2.17929 0.373906L12.9027 11.0973C13.4012 11.5959 13.4012 12.4041 12.9027 12.9027L2.17929 23.6261C1.68074 24.1246 0.872448 24.1246 0.373906 23.6261Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.6261 0.373908C24.1246 0.87245 24.1246 1.68075 23.6261 2.17929L13.8054 12L23.6261 21.8207C24.1246 22.3193 24.1246 23.1276 23.6261 23.6261C23.1276 24.1246 22.3193 24.1246 21.8207 23.6261L11.0973 12.9027C10.5988 12.4041 10.5988 11.5959 11.0973 11.0973L21.8207 0.373908C22.3193 -0.124633 23.1276 -0.124633 23.6261 0.373908Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
