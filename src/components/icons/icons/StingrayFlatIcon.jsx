import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const StingrayFlatIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M12.5085 0L0 9.28571C6.21739 14.3842 10.6408 21.3054 12.8771 28.202C15.0643 21.33 18.1361 17.4138 19.242 16.0099C16.3913 12.4138 13.0737 6.03448 12.5085 0Z" fill="currentColor"/>
    <path d="M12.4348 30C11.7467 25.0493 7.22498 18.0049 5.7505 16.3054C4.42347 18.0049 2.3592 19.8522 1.7694 20.2709L12.4348 30Z" fill="currentColor"/>
    <path d="M13.2948 30C13.9829 25.0493 18.5046 18.0049 19.9791 16.3054C21.3062 18.0049 23.3704 19.8522 23.9602 20.2463L13.2948 30Z" fill="currentColor"/>
    <path d="M13.2703 0.024663L25.9999 9.28574C24.206 10.8128 21.9943 13.005 19.93 15.7143C16.809 11.872 13.9584 5.98525 13.2703 0.024663Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
