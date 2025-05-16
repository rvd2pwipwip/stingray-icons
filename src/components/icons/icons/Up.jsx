import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Up = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.376012 10.4078C-0.125337 9.90642 -0.125337 9.09358 0.376012 8.59223L8.59223 0.376013C9.09358 -0.125336 9.90642 -0.125336 10.4078 0.376013L18.624 8.59223C19.1253 9.09358 19.1253 9.90643 18.624 10.4078C18.1226 10.9091 17.3098 10.9091 16.8084 10.4078L9.5 3.09933L2.19156 10.4078C1.69021 10.9091 0.87736 10.9091 0.376012 10.4078Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
