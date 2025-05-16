import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Comment = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M2.25 0.5H27.75C28.1473 0.5 28.5019 0.629431 28.8281 0.912109L28.9668 1.04199C29.3381 1.42356 29.5 1.82159 29.5 2.25V28.793L24.207 23.5H2.25C1.87914 23.5 1.52949 23.3739 1.19141 23.0859L1.04688 22.9531C0.664114 22.5704 0.5 22.1738 0.5 21.75V2.25C0.5 1.87914 0.626066 1.52949 0.914062 1.19141L1.04688 1.04688C1.42964 0.664113 1.82621 0.5 2.25 0.5Z" fill="currentColor" stroke="black"/>
    </svg>
  </IconWrapper>
);
