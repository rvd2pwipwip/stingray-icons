import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Block = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0ZM7.35547 24.8857C9.46921 26.5227 12.1196 27.5 15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 12.1196 26.5227 9.46921 24.8857 7.35547L7.35547 24.8857ZM15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 17.5788 3.28085 19.9754 4.61914 21.9658L21.9658 4.61914C19.9754 3.28085 17.5788 2.5 15 2.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
