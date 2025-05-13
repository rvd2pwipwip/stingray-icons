// scripts/generate-icon-index.js
// Auto-generates src/components/icons/index.js with named exports for all icons

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../src/components/icons/icons');
const OUTPUT_FILE = path.join(__dirname, '../src/components/icons/index.js');

function getIconFiles() {
  return fs.readdirSync(ICONS_DIR)
    .filter(file => file.endsWith('.jsx'));
}

function getExportName(filename) {
  return path.basename(filename, '.jsx');
}

function generateExports() {
  const iconFiles = getIconFiles();
  const lines = iconFiles.map(file => {
    const exportName = getExportName(file);
    return `export { ${exportName} } from './icons/${exportName}';`;
  });
  const content = lines.join('\n') + '\n';
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`Generated ${OUTPUT_FILE} with ${iconFiles.length} exports.`);
}

generateExports(); 