import React from 'react';

export const IconWrapper = ({ size = 24, color = 'currentColor', children, ...props }) => (
  <div
    style={{
      width: size,
      height: size,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}
  >
    {children}
  </div>
);