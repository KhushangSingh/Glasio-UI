const fs = require('fs');
const path = require('path');

const srcComponents = path.join(__dirname, '..', '..', 'components');
const destComponents = path.join(__dirname, '..', 'components');

const srcCursors = path.join(__dirname, '..', '..', 'cursors.js');
const destCursors = path.join(__dirname, '..', 'cursors.js');

try {
  // Copy components directory
  if (fs.existsSync(srcComponents)) {
    console.log('Copying components directory for npm package...');
    fs.cpSync(srcComponents, destComponents, { recursive: true, force: true });
  } else {
    console.warn('Warning: components directory not found at', srcComponents);
  }

  // Copy cursors.js
  if (fs.existsSync(srcCursors)) {
    console.log('Copying cursors.js for npm package...');
    fs.copyFileSync(srcCursors, destCursors);
  } else {
    console.warn('Warning: cursors.js not found at', srcCursors);
  }
} catch (error) {
  console.error('Error during prepack copy:', error);
  process.exit(1);
}
