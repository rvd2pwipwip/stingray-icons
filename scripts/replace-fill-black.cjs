// scripts/replace-fill-black.cjs
// Replaces fill='black' or fill="black" with fill='currentColor' in all SVGs in src/assets/svg/

const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, '../src/assets/svg');
const FILL_BLACK_REGEX = /fill=(['"])black\1/gi;

const files = fs.readdirSync(SVG_DIR).filter(f => f.endsWith('.svg'));
let totalReplacements = 0;

files.forEach(file => {
  const filePath = path.join(SVG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(FILL_BLACK_REGEX);
  if (matches) {
    content = content.replace(FILL_BLACK_REGEX, "fill='currentColor'");
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}: replaced ${matches.length} occurrence(s) of fill='black'`);
    totalReplacements += matches.length;
  }
});

console.log(`Done. Total replacements: ${totalReplacements}`); 