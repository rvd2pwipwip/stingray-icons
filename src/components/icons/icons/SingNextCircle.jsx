import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SingNextCircle = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M10.2087 19.995C9.87284 20.2393 9.40164 19.9993 9.40164 19.584V11.416C9.40164 11.0007 9.87284 10.7607 10.2087 11.005L15.8242 15.089C16.1033 15.292 16.1033 15.708 15.8242 15.911L10.2087 19.995Z" fill="currentColor"/>
    <path d="M17.3235 19.995C16.9876 20.2393 16.5164 19.9993 16.5164 19.584V11.416C16.5164 11.0007 16.9876 10.7607 17.3235 11.005L22.939 15.089C23.218 15.292 23.218 15.708 22.939 15.911L17.3235 19.995Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5C0 6.94364 6.94364 0 15.5 0C24.0564 0 31 6.94364 31 15.5C31 24.0564 24.0564 31 15.5 31C6.94364 31 0 24.0564 0 15.5ZM15.5 2.54098C8.34699 2.54098 2.54098 8.34699 2.54098 15.5C2.54098 22.653 8.34699 28.459 15.5 28.459C22.653 28.459 28.459 22.653 28.459 15.5C28.459 8.34699 22.653 2.54098 15.5 2.54098Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
