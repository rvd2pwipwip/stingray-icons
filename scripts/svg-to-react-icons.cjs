// scripts/svg-to-react-icons.cjs
// Converts SVGs in src/assets/svg/ to React components in src/components/icons/icons/

const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, '../src/assets/svg');
const OUT_DIR = path.join(__dirname, '../src/components/icons/icons');

function pascalCase(str) {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/(?:^|\s)(\w)/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/\s+/g, '');
}

function generateComponent(name, svgContent) {
  // Remove XML declaration if present
  svgContent = svgContent.replace(/<\?xml.*?\?>/g, '');
  // Remove DOCTYPE if present
  svgContent = svgContent.replace(/<!DOCTYPE.*?>/g, '');
  // Remove width, height, color from SVG tag
  svgContent = svgContent.replace(/(width|height|color)=("|\')[^"']*("|\')/g, '');
  // Add width, height, and {...props} to SVG tag (no color)
  svgContent = svgContent.replace(
    /<svg([^>]*)>/,
    `<svg$1 width={size || '1em'} height={size || '1em'} {...props}>`
  );
  // Ensure fill="none" is present on SVG tag
  if (!/fill="none"/.test(svgContent)) {
    svgContent = svgContent.replace(
      /<svg([^>]*)>/,
      (m, attrs) => `<svg${attrs} fill="none">`
    );
  }
  // Replace fill-rule/clip-rule with camelCase
  svgContent = svgContent.replace(/fill-rule=/g, 'fillRule=').replace(/clip-rule=/g, 'clipRule=');
  // Replace single quotes for JSX attributes
  svgContent = svgContent.replace(/'([^']*)'/g, '"$1"');

  return `import React from 'react';\nimport { IconWrapper } from '../IconWrapper';\n\nexport const ${name} = ({ size, color = 'currentColor', ...props }) => (\n  <IconWrapper size={size} color={color} {...props}>\n    ${svgContent.trim().replace(/\n/g, '\n    ')}\n  </IconWrapper>\n);\n`;
}

fs.readdirSync(SVG_DIR).forEach(file => {
  if (file.endsWith('.svg')) {
    const svgPath = path.join(SVG_DIR, file);
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const baseName = path.basename(file, '.svg');
    const componentName = pascalCase(baseName);
    const outFile = path.join(OUT_DIR, `${componentName}.jsx`);
    const componentCode = generateComponent(componentName, svgContent);
    fs.writeFileSync(outFile, componentCode, 'utf8');
  }
}); 