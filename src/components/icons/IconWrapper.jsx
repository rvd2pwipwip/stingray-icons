import React from 'react';

export const IconWrapper = ({ size, color = 'currentColor', children, ...props }) => (
  <div
    style={{
      width: size || 'auto',
      height: size || 'auto',
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