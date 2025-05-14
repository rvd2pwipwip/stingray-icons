import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Subtitles = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M29.7143 3.28571C29.7143 2.73343 29.2666 2.28571 28.7143 2.28571H3.28571C2.73343 2.28571 2.28571 2.73343 2.28571 3.28572V18.6571C2.28571 19.2094 2.73343 19.6571 3.28571 19.6571H9.6L13.7143 23.7714V19.6571H28.7143C29.2666 19.6571 29.7143 19.2094 29.7143 18.6571V3.28571ZM1.82857 0C0.818679 0 0 0.818679 0 1.82857V20.1143C0 21.1242 0.818679 21.9429 1.82857 21.9429H9.14286L15.5429 27.8857V21.9429H30.1714C31.1813 21.9429 32 21.1242 32 20.1143V1.82857C32 0.818679 31.1813 0 30.1714 0H1.82857Z" fill="currentColor"/>
    <path d="M4.11429 8.22857H6.85714V10.0571H4.11429V8.22857Z" fill="currentColor"/>
    <path d="M8.68571 8.22857H17.8286V10.0571H8.68571V8.22857Z" fill="currentColor"/>
    <path d="M19.6571 8.22857H25.1429V10.0571H19.6571V8.22857Z" fill="currentColor"/>
    <path d="M4.11429 11.8857H12.3429V13.7143H4.11429V11.8857Z" fill="currentColor"/>
    <path d="M14.1714 11.8857H19.6571V13.7143H14.1714V11.8857Z" fill="currentColor"/>
    <path d="M21.4857 11.8857H26.9714V13.7143H21.4857V11.8857Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
