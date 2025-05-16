import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const ThumbDown = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M7.5 -4.0055e-06L22.5 -2.69415e-06L22.5 19.5L12 30L10.125 28.125C9.95 27.95 9.80625 27.7125 9.69375 27.4125C9.58125 27.1125 9.525 26.825 9.525 26.55L9.525 26.025L11.175 19.5L3 19.5C2.2 19.5 1.5 19.2 0.900001 18.6C0.3 18 -7.97079e-07 17.3 -7.27141e-07 16.5L-4.64873e-07 13.5C-4.49574e-07 13.325 0.0187507 13.1375 0.0562511 12.9375C0.0937496 12.7375 0.150001 12.55 0.225 12.375L4.725 1.8C4.95 1.3 5.325 0.874996 5.85 0.524997C6.375 0.174997 6.925 -4.05576e-06 7.5 -4.0055e-06ZM25.5 19.5L25.5 -2.43189e-06L31.5 -1.90735e-06L31.5 19.5L25.5 19.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
