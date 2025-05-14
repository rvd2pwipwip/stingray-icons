import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const List = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2.5C2.94772 2.5 2.5 2.94772 2.5 3.5V26.5C2.5 27.0523 2.94772 27.5 3.5 27.5H26.5C27.0523 27.5 27.5 27.0523 27.5 26.5V3.5C27.5 2.94772 27.0523 2.5 26.5 2.5H3.5ZM2 0C0.895431 0 0 0.89543 0 2V28C0 29.1046 0.89543 30 2 30H28C29.1046 30 30 29.1046 30 28V2C30 0.895431 29.1046 0 28 0H2Z" fill="currentColor"/>
    <path d="M10 15C10 14.4477 10.4477 14 11 14H21C21.5523 14 22 14.4477 22 15V16C22 16.5523 21.5523 17 21 17H11C10.4477 17 10 16.5523 10 16V15Z" fill="currentColor"/>
    <path d="M10 9C10 8.44771 10.4477 8 11 8H22C22.5523 8 23 8.44772 23 9V10C23 10.5523 22.5523 11 22 11H11C10.4477 11 10 10.5523 10 10V9Z" fill="currentColor"/>
    <path d="M10 21C10 20.4477 10.4477 20 11 20H22C22.5523 20 23 20.4477 23 21V22C23 22.5523 22.5523 23 22 23H11C10.4477 23 10 22.5523 10 22V21Z" fill="currentColor"/>
    <path d="M5 15C5 14.4477 5.44772 14 6 14H7C7.55228 14 8 14.4477 8 15V16C8 16.5523 7.55228 17 7 17H6C5.44772 17 5 16.5523 5 16V15Z" fill="currentColor"/>
    <path d="M5 9C5 8.44771 5.44772 8 6 8H7C7.55228 8 8 8.44772 8 9V10C8 10.5523 7.55228 11 7 11H6C5.44772 11 5 10.5523 5 10V9Z" fill="currentColor"/>
    <path d="M5 21C5 20.4477 5.44772 20 6 20H7C7.55228 20 8 20.4477 8 21V22C8 22.5523 7.55228 23 7 23H6C5.44772 23 5 22.5523 5 22V21Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
