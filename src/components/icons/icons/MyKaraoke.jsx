import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const MyKaraoke = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 0C7.34315 0 6 1.34315 6 3V21C6 22.6569 7.34315 24 9 24H27C28.6569 24 30 22.6569 30 21V3C30 1.34315 28.6569 0 27 0H9ZM18 14.4645V3H19.303C19.4573 4.34676 20.9189 6.06261 22.0787 7.42405C22.6434 8.08698 23.1365 8.6659 23.3723 9.07724C24.1198 10.3815 24.3778 12.6096 23.1346 14.4029C22.7896 14.9006 22.3296 14.7834 22.7896 14.0225C23.2496 13.2617 23.3723 12.0662 23.1998 10.9249C22.9059 8.98075 20.8997 7.71864 19.2896 7.33823V15.9087C19.3546 17.0311 18.4355 18.3921 16.9165 19.2561C15.0293 20.3295 12.9308 20.2294 12.2294 19.0325C11.528 17.8355 12.4892 15.995 14.3764 14.9216C15.8016 14.1109 17.0265 13.9695 18 14.4645Z" fill="currentColor"/>
    <path d="M3 6C1.34326 6 0 7.34315 0 9V27C0 28.6569 1.34326 30 3 30H21C22.6567 30 24 28.6569 24 27H5C3.89551 27 3 26.1046 3 25V6Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
