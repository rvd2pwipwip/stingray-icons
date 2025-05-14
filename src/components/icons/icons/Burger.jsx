import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Burger = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H21.5C22.3284 0 23 0.671573 23 1.5C23 2.32843 22.3284 3 21.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 9.5C0 8.67157 0.671573 8 1.5 8H21.5C22.3284 8 23 8.67157 23 9.5C23 10.3284 22.3284 11 21.5 11H1.5C0.671573 11 0 10.3284 0 9.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 17.5C0 16.6716 0.671573 16 1.5 16H21.5C22.3284 16 23 16.6716 23 17.5C23 18.3284 22.3284 19 21.5 19H1.5C0.671573 19 0 18.3284 0 17.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
