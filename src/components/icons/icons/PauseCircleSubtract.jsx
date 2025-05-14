import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const PauseCircleSubtract = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM13.1 8C13.3762 8 13.6 8.22386 13.6 8.5V21.9001C13.6 22.1763 13.3762 22.4001 13.1 22.4001H10.5C10.2239 22.4001 10 22.1763 10 21.9001V8.5C10 8.22386 10.2239 8 10.5 8H13.1ZM19.5 8C19.7762 8 20 8.22386 20 8.5V21.9001C20 22.1763 19.7762 22.4001 19.5 22.4001H16.9C16.6239 22.4001 16.4 22.1763 16.4 21.9001V8.5C16.4 8.22386 16.6239 8 16.9 8H19.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
