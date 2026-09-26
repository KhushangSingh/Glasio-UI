const fs = require('fs');
const path = require('path');

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const componentsDir = path.join(__dirname, '../components');
const snippetsFile = path.join(__dirname, '../vscode-extension/snippets/snippets.json');

const snippets = {};

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
      const componentName = path.basename(file, path.extname(file));
      const content = fs.readFileSync(filePath, 'utf-8');
      
      snippets[componentName] = {
        prefix: `glasio-${toKebabCase(componentName).replace('glass-', '')}`,
        body: content.split('\n'),
        description: `Glasio UI Component: ${componentName}`
      };
    }
  }
}

walkDir(componentsDir);
fs.writeFileSync(snippetsFile, JSON.stringify(snippets, null, 2));
console.log('Snippets generated successfully!');
