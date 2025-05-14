import React from 'react';
import * as Icons from '../components/icons';

export default {
  title: 'Icons/Icon Gallery',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A collection of SVG icons available as React components.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
      description: 'Size of the icon in pixels',
      defaultValue: 24,
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
      defaultValue: 'currentColor',
    },
  },
};

// Dynamically build the icon gallery from all named exports
const iconComponents = Object.entries(Icons).map(([name, component]) => ({
  name,
  component,
}));

const IconGrid = ({ icons, size, color, isDarkMode = false }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px',
    padding: '20px',
  }}>
    {icons.map(({ name, component: Icon }) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          border: `1px solid #eee`,
          borderRadius: '8px',
          backgroundColor: isDarkMode ? '#2a2a2a' : 'white',
        }}
      >
        <Icon size={size} color={color} />
        <span style={{
          marginTop: '12px',
          fontSize: '12px',
          color: isDarkMode ? '#999' : '#666',
          textAlign: 'center',
        }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

export const Gallery = {
  args: {
    size: 32,
    color: '#000000',
  },
  render: (args) => <IconGrid icons={iconComponents} {...args} />,
};

export const DarkMode = {
  args: {
    size: 32,
    color: '#ffffff',
  },
  render: (args) => (
    <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
      <IconGrid icons={iconComponents} {...args} isDarkMode={true} />
    </div>
  ),
};

export const SizeVariations = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '16px' }}>Size Variations</h3>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        {iconComponents.map(({ name, component: Icon }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <Icon size={16} />
            <Icon size={24} />
            <Icon size={32} />
            <Icon size={48} />
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};