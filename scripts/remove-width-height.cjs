// scripts/remove-width-height.cjs
// Removes width and height attributes from all SVGs in src/assets/svg/

const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, '../src/assets/svg');
const WIDTH_HEIGHT_REGEX = /\s(width|height)=(["'])[\d.]+\2/gi;

const files = fs.readdirSync(SVG_DIR).filter(f => f.endsWith('.svg'));
let totalRemoved = 0;

files.forEach(file => {
  const filePath = path.join(SVG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(WIDTH_HEIGHT_REGEX);
  if (matches) {
    content = content.replace(WIDTH_HEIGHT_REGEX, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}: removed ${matches.length} width/height attribute(s)`);
    totalRemoved += matches.length;
  }
});

console.log(`Done. Total width/height attributes removed: ${totalRemoved}`); 