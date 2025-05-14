import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Desktop = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M27.2727 0H2.72727C1.22727 0 0 1.22727 0 2.72727V19.0909C0 20.5909 1.22727 21.8182 2.72727 21.8182H12.2727V24.5455H9.54545V27.2727H20.4545V24.5455H17.7273V21.8182H27.2727C28.7727 21.8182 30 20.5909 30 19.0909V2.72727C30 1.22727 28.7727 0 27.2727 0ZM27.2727 19.0909H2.72727V2.72727H27.2727V19.0909Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
