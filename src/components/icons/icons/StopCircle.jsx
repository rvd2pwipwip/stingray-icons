import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const StopCircle = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5C0 6.94364 6.94364 0 15.5 0C24.0564 0 31 6.94364 31 15.5C31 24.0564 24.0564 31 15.5 31C6.94364 31 0 24.0564 0 15.5ZM15.5 2.54098C8.34699 2.54098 2.54098 8.34699 2.54098 15.5C2.54098 22.653 8.34699 28.459 15.5 28.459C22.653 28.459 28.459 22.653 28.459 15.5C28.459 8.34699 22.653 2.54098 15.5 2.54098Z" fill="currentColor"/>
    <path d="M9.40164 9.90984C9.40164 9.62917 9.62917 9.40164 9.90984 9.40164H21.0902C21.3708 9.40164 21.5984 9.62917 21.5984 9.90984V21.0902C21.5984 21.3708 21.3708 21.5984 21.0902 21.5984H9.90984C9.62917 21.5984 9.40164 21.3708 9.40164 21.0902V9.90984Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
