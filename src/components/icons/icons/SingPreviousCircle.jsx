import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SingPreviousCircle = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M20.7913 11.005C21.1272 10.7607 21.5984 11.0007 21.5984 11.416V19.584C21.5984 19.9993 21.1272 20.2393 20.7913 19.995L15.1758 15.911C14.8967 15.708 14.8967 15.2919 15.1758 15.089L20.7913 11.005Z" fill="currentColor"/>
    <path d="M13.6765 11.005C14.0124 10.7607 14.4836 11.0007 14.4836 11.416L14.4836 19.584C14.4836 19.9993 14.0124 20.2393 13.6765 19.995L8.06102 15.911C7.78197 15.708 7.78197 15.2919 8.06102 15.089L13.6765 11.005Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5C0 6.94364 6.94364 0 15.5 0C24.0564 0 31 6.94364 31 15.5C31 24.0564 24.0564 31 15.5 31C6.94364 31 0 24.0564 0 15.5ZM15.5 2.54098C8.34699 2.54098 2.54098 8.34699 2.54098 15.5C2.54098 22.653 8.34699 28.459 15.5 28.459C22.653 28.459 28.459 22.653 28.459 15.5C28.459 8.34699 22.653 2.54098 15.5 2.54098Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
