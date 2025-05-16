import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Bookmark = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M3.53418 1H21.2031C21.8197 1 22.3395 1.18348 22.7988 1.56836L22.9922 1.74512C23.4982 2.25113 23.7373 2.82968 23.7373 3.53418V26.46C23.7373 27.3305 23.4211 27.9685 22.7412 28.4629L22.6006 28.5605C21.8241 29.0674 21.0576 29.1363 20.1836 28.7656L12.7627 25.585L12.3691 25.416L11.9746 25.585L4.55371 28.7656C3.73427 29.1131 3.00944 29.0743 2.28223 28.6504L2.13672 28.5605C1.35947 28.0532 1 27.3886 1 26.46V3.53418C1 2.91765 1.18347 2.39782 1.56836 1.93848L1.74512 1.74512C2.25113 1.2391 2.82968 1 3.53418 1Z" stroke="black" stroke-/>
    </svg>
  </IconWrapper>
);
