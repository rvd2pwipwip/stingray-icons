import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Google = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M15 12.8516V18.0078H23.5157C23.1641 20.2148 20.9375 24.4727 15 24.4727C9.8828 24.4727 5.70312 20.2344 5.70312 15C5.70312 9.76559 9.8828 5.52734 15 5.52734C17.9101 5.52734 19.8632 6.77734 20.9766 7.85156L25.0586 3.92578C22.4414 1.48437 19.0429 0 15 0C6.69922 0 0 6.69921 0 15C0 23.3007 6.69922 30 15 30C23.6523 30 29.3946 23.9062 29.3946 15.3516C29.3946 14.3555 29.2968 13.6133 29.1601 12.8516H15Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
