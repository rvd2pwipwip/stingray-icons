import React from 'react';
import * as Icons from '../components/icons';

export default {
  title: 'Icons/Icon Gallery',
  component: Icons.HomeIcon,
};

const IconGrid = ({ icons }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px',
    padding: '20px',
  }}>
    {Object.entries(icons)
      .filter(([name]) => name.endsWith('Icon'))
      .map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #eee',
            borderRadius: '4px',
          }}
        >
          <Icon size={32} />
          <span style={{ marginTop: '8px', fontSize: '12px' }}>{name}</span>
        </div>
      ))}
  </div>
);

export const Gallery = () => <IconGrid icons={Icons} />;