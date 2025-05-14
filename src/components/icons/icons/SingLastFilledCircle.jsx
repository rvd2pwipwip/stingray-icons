import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SingLastFilledCircle = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71972 0 0 6.71972 0 15C0 23.2803 6.71972 30 15 30C23.2803 30 30 23.2803 30 15C30 6.71972 23.2803 0 15 0ZM16.86 14.5926C17.1401 14.7919 17.1401 15.2081 16.86 15.4074L9.78988 20.438C9.45885 20.6735 9 20.4369 9 20.0306V9.96942C9 9.56315 9.45885 9.32649 9.78988 9.56202L16.86 14.5926ZM20.5714 9.5C20.5714 9.22386 20.3476 9 20.0714 9H19.4206C19.1445 9 18.9206 9.22386 18.9206 9.5V20.5C18.9206 20.7761 19.1445 21 19.4206 21H20.0714C20.3476 21 20.5714 20.7761 20.5714 20.5V9.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
