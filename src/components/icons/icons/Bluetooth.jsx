import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Bluetooth = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M22.32 11.1397L16.5164 5.33607H15.5V13.0505L10.8348 8.38525L9.40164 9.81836L15.0833 15.5L9.40164 21.1816L10.8348 22.6148L15.5 17.9495V25.6639H16.5164L22.32 19.8603L17.9495 15.5L22.32 11.1397ZM17.5328 9.22885L19.4436 11.1397L17.5328 13.0505V9.22885ZM19.4436 19.8603L17.5328 21.7711V17.9495L19.4436 19.8603Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5C0 6.94364 6.94364 0 15.5 0C24.0564 0 31 6.94364 31 15.5C31 24.0564 24.0564 31 15.5 31C6.94364 31 0 24.0564 0 15.5ZM15.5 2.54098C8.34699 2.54098 2.54098 8.34699 2.54098 15.5C2.54098 22.653 8.34699 28.459 15.5 28.459C22.653 28.459 28.459 22.653 28.459 15.5C28.459 8.34699 22.653 2.54098 15.5 2.54098Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
