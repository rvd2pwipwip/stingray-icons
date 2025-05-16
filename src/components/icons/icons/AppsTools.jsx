import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const AppsTools = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M0 0H7V7H0V0Z" fill="currentColor"/>
    <path d="M0 11H7V18H0V11Z" fill="currentColor"/>
    <path d="M0 22H7V29H0V22Z" fill="currentColor"/>
    <path d="M11 0H18V7H11V0Z" fill="currentColor"/>
    <path d="M11 11H18V18H11V11Z" fill="currentColor"/>
    <path d="M11 22H18V29H11V22Z" fill="currentColor"/>
    <path d="M22 0H29V7H22V0Z" fill="currentColor"/>
    <path d="M22 11H29V18H22V11Z" fill="currentColor"/>
    <path d="M22 22H29V29H22V22Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
