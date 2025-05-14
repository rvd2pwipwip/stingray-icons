import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SoundQuality = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M27 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 21H3V3H27V21Z" fill="currentColor"/>
    <path d="M9.435 17.565C7.905 16.035 7.125 14.025 7.125 12C7.125 9.975 7.905 7.965 9.42 6.42L7.575 4.575C5.52 6.615 4.5 9.315 4.5 12C4.5 14.685 5.52 17.385 7.59 19.41L9.435 17.565Z" fill="currentColor"/>
    <path d="M15 17.25C17.895 17.25 20.25 14.895 20.25 12C20.25 9.105 17.895 6.75 15 6.75C12.105 6.75 9.75 9.105 9.75 12C9.75 14.895 12.105 17.25 15 17.25ZM15 9.75C16.245 9.75 17.25 10.755 17.25 12C17.25 13.245 16.245 14.25 15 14.25C13.755 14.25 12.75 13.245 12.75 12C12.75 10.755 13.755 9.75 15 9.75Z" fill="currentColor"/>
    <path d="M20.5799 17.58L22.4249 19.425C24.4799 17.385 25.4999 14.685 25.4999 12C25.4999 9.315 24.4799 6.615 22.4099 4.59L20.5649 6.435C22.0949 7.965 22.8749 9.975 22.8749 12C22.8749 14.025 22.0949 16.035 20.5799 17.58Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
