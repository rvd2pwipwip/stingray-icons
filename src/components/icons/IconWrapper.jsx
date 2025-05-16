import React from 'react';

export const IconWrapper = ({ size, color = 'currentColor', children, ...props }) => (
  <div
    style={{
      ...(size ? { width: size, height: size } : {}),
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