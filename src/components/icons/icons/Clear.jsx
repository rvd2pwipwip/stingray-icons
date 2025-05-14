import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Clear = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM11.0607 8.93934C10.4749 8.35355 9.52513 8.35355 8.93934 8.93934C8.35355 9.52513 8.35355 10.4749 8.93934 11.0607L12.8787 15L8.93934 18.9393C8.35355 19.5251 8.35355 20.4749 8.93934 21.0607C9.52513 21.6464 10.4749 21.6464 11.0607 21.0607L15 17.1213L18.9393 21.0607C19.5251 21.6464 20.4749 21.6464 21.0607 21.0607C21.6464 20.4749 21.6464 19.5251 21.0607 18.9393L17.1213 15L21.0607 11.0607C21.6464 10.4749 21.6464 9.52513 21.0607 8.93934C20.4749 8.35355 19.5251 8.35355 18.9393 8.93934L15 12.8787L11.0607 8.93934Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
