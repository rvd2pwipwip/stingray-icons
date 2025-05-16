import React from 'react';
import { IconWrapper } from '../IconWrapper';

export const SingPrevious = ({ size, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <svg viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} {...props}>
    <path d="M24.3823 0.19132C25.06 -0.290731 25.9996 0.193641 26 1.02519V17.4097C26 18.2415 25.0601 18.7266 24.3823 18.2445L13.5639 10.5477V17.4097C13.5639 18.2415 12.624 18.7266 11.9462 18.2445L0.429937 10.0518C-0.14334 9.64362 -0.143284 8.79229 0.429937 8.38406L11.9462 0.19132C12.6239 -0.290731 13.5636 0.193641 13.5639 1.02519V7.88714L24.3823 0.19132Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);
