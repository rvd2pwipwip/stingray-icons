import React from 'react';
import { AddIcon, AddListIcon, AddSongIcon } from '../components/icons';

export default {
  title: 'Icons/Icon Gallery',
  component: AddIcon,
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

// Create an array of icon components instead of using Object.entries
const iconComponents = [
  { name: 'AddIcon', component: AddIcon },
  { name: 'AddListIcon', component: AddListIcon },
  { name: 'AddSongIcon', component: AddSongIcon },
];

const IconGrid = ({ icons, size, color }) => (
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
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: 'white',
        }}
      >
        <Icon size={size} color={color} />
        <span style={{ 
          marginTop: '12px', 
          fontSize: '12px',
          color: '#666',
          textAlign: 'center',
        }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

// Default gallery with all icons
export const Gallery = {
  args: {
    size: 32,
    color: '#000000',
  },
  render: (args) => <IconGrid icons={iconComponents} {...args} />,
};

// Dark mode example
export const DarkMode = {
  args: {
    size: 32,
    color: '#ffffff',
  },
  render: (args) => (
    <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
      <IconGrid icons={iconComponents} {...args} />
    </div>
  ),
};

// Size variations
export const SizeVariations = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '16px' }}>Size Variations</h3>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        {[16, 24, 32, 48].map((size) => (
          <div key={size} style={{ textAlign: 'center' }}>
            <AddIcon size={size} />
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
              {size}px
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};