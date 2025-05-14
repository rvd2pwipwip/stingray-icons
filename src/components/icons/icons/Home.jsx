import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Home = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.0223 1.02798C14.3898 -0.342661 16.6102 -0.342656 17.9777 1.02798L29.9777 13.0556C30.6324 13.7118 31 14.6008 31 15.5276V27.6683C31 29.6013 29.433 31.1683 27.5 31.1683H17.8V22.2167H13.2V31.1683H3.5C1.567 31.1683 0 29.6013 0 27.6683V15.5276C0 14.6008 0.367644 13.7118 1.02228 13.0556L13.0223 1.02798ZM15.854 3.14685C15.6586 2.95105 15.3414 2.95105 15.146 3.14685L3.14604 15.1745C3.05252 15.2682 3 15.3952 3 15.5276V27.6683C3 27.9445 3.22386 28.1683 3.5 28.1683H10.2V19.2167H20.8V28.1683H27.5C27.7761 28.1683 28 27.9445 28 27.6683V15.5276C28 15.3952 27.9475 15.2682 27.854 15.1745L15.854 3.14685Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
