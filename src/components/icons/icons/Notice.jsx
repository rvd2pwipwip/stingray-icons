import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const Notice = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path d="M13.4672 9.40164C13.4672 8.27896 14.3773 7.36885 15.5 7.36885C16.6227 7.36885 17.5328 8.27896 17.5328 9.40164V14.4836C17.5328 15.6063 16.6227 16.5164 15.5 16.5164C14.3773 16.5164 13.4672 15.6063 13.4672 14.4836V9.40164Z" fill="currentColor"/>
    <path d="M13.4672 20.582C13.4672 19.4593 14.3773 18.5492 15.5 18.5492C16.6227 18.5492 17.5328 19.4593 17.5328 20.582C17.5328 21.7046 16.6227 22.6148 15.5 22.6148C14.3773 22.6148 13.4672 21.7046 13.4672 20.582Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5C0 6.94364 6.94364 0 15.5 0C24.0564 0 31 6.94364 31 15.5C31 24.0564 24.0564 31 15.5 31C6.94364 31 0 24.0564 0 15.5ZM15.5 2.54098C8.34699 2.54098 2.54098 8.34699 2.54098 15.5C2.54098 22.653 8.34699 28.459 15.5 28.459C22.653 28.459 28.459 22.653 28.459 15.5C28.459 8.34699 22.653 2.54098 15.5 2.54098Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
