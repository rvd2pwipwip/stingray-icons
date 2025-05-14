import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Loop = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M12.5 4.63636V0L6.25 6.18182L12.5 12.3636V7.72727C17.6719 7.72727 21.875 11.8845 21.875 17C21.875 18.5609 21.4844 20.0445 20.7812 21.3273L23.0625 23.5836C24.2812 21.6827 25 19.4264 25 17C25 10.1691 19.4062 4.63636 12.5 4.63636ZM12.5 26.2727C7.32812 26.2727 3.125 22.1155 3.125 17C3.125 15.4391 3.51562 13.9555 4.21875 12.6727L1.9375 10.4164C0.71875 12.3173 0 14.5736 0 17C0 23.8309 5.59375 29.3636 12.5 29.3636V34L18.75 27.8182L12.5 21.6364V26.2727Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
