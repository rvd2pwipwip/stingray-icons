import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Facebook = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M28.3399 0H1.66016C0.742188 0 0 0.742187 0 1.66015V28.3398C0 29.2578 0.742188 30 1.66016 30H16.0156V18.3789H12.1094V13.8477H16.0156V10.5078C16.0156 6.64063 18.3984 4.53125 21.8555 4.53125C23.496 4.53125 24.9218 4.64843 25.332 4.70703V8.75L22.9492 8.76953C21.0547 8.76953 20.7031 9.64843 20.7031 10.9571V13.8477H25.1758L24.5898 18.3789H20.7031V30H28.3399C29.2578 30 30 29.2578 30 28.3398V1.66015C30 0.742187 29.2578 0 28.3399 0Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
