import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Music = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M25.0334 0L9.37109 3.91559V21.4854C7.89603 20.7174 5.5983 20.9081 3.49393 22.1231C0.684741 23.7449 -0.716018 26.578 0.365237 28.4507C1.44649 30.3235 4.60033 30.527 7.40952 28.9051C9.6198 27.629 10.9582 25.6031 10.9018 23.8851H10.9373V9.39741L23.4672 6.26494V17.5699C21.9921 16.8018 19.6944 16.9926 17.59 18.2075C14.7809 19.8294 13.3801 22.6624 14.4614 24.5351C15.5426 26.4079 18.6964 26.6114 21.5056 24.9895C23.7159 23.7134 25.0543 21.6875 24.9979 19.9695H25.0334V0Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
