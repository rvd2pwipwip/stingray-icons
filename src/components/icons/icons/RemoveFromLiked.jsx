import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const RemoveFromLiked = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 3.94462C13.5394 3.34596 12.9947 2.71942 12.3785 2.1488C11.0554 0.923381 9.14645 -0.274729 6.88945 0.0556099C2.53811 0.692481 0 4.52981 0 9.13131C0 12.3147 2.06767 19.5425 13.2918 25.815C13.7332 26.0617 14.2668 26.0617 14.7082 25.815C25.9323 19.5425 28 12.3147 28 9.13131C28 4.52982 25.4619 0.692485 21.1106 0.0556137C18.8536 -0.274726 16.9446 0.923383 15.6215 2.1488C15.0053 2.71942 14.4606 3.34596 14 3.94462ZM9.07037 10.6464C8.25362 10.6464 7.5915 11.3248 7.5915 12.1616C7.5915 12.9984 8.25362 13.6768 9.07037 13.6768H18.9295C19.7463 13.6768 20.4084 12.9984 20.4084 12.1616C20.4084 11.3248 19.7463 10.6464 18.9295 10.6464H9.07037Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
