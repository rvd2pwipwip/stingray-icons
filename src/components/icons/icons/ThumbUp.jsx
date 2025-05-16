import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const ThumbUp = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M24 30H9V10.5L19.5 0L21.375 1.875C21.55 2.05 21.6938 2.2875 21.8063 2.5875C21.9188 2.8875 21.975 3.175 21.975 3.45V3.975L20.325 10.5H28.5C29.3 10.5 30 10.8 30.6 11.4C31.2 12 31.5 12.7 31.5 13.5V16.5C31.5 16.675 31.4813 16.8625 31.4438 17.0625C31.4063 17.2625 31.35 17.45 31.275 17.625L26.775 28.2C26.55 28.7 26.175 29.125 25.65 29.475C25.125 29.825 24.575 30 24 30ZM6 10.5V30H0V10.5H6Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
