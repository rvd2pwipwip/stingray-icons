import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const CdTrack = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 21.75C11.265 21.75 8.25 18.735 8.25 15C8.25 11.265 11.265 8.25 15 8.25C18.735 8.25 21.75 11.265 21.75 15C21.75 18.735 18.735 21.75 15 21.75ZM15 13.5C14.175 13.5 13.5 14.175 13.5 15C13.5 15.825 14.175 16.5 15 16.5C15.825 16.5 16.5 15.825 16.5 15C16.5 14.175 15.825 13.5 15 13.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
