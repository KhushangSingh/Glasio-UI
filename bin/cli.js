#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

// Convert kebab-case to PascalCase (glass-card -> GlassCard)
function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

// Recursively find a file in a directory
function findComponentFile(dir, fileName) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findComponentFile(filePath, fileName));
    } else if (file.toLowerCase() === fileName.toLowerCase() || 
               file.toLowerCase() === fileName.toLowerCase() + '.jsx' ||
               file.toLowerCase() === fileName.toLowerCase() + '.tsx') {
      results.push(filePath);
    }
  }
  return results;
}

program
  .name('glasio-ui')
  .description('CLI to add Glasio UI components to your project')
  .version('1.0.0');

program
  .command('add <component>')
  .description('Add a component to your project')
  .action((component) => {
    const targetFileName = toPascalCase(component);
    const sourceComponentsDir = path.join(__dirname, '..', 'components');
    
    console.log(chalk.cyan(`\n🔍 Searching for ${chalk.bold(targetFileName)}...`));
    
    if (!fs.existsSync(sourceComponentsDir)) {
      console.log(chalk.red(`❌ Error: Components directory not found in the package.`));
      process.exit(1);
    }

    const matches = findComponentFile(sourceComponentsDir, targetFileName);
    
    if (matches.length === 0) {
      console.log(chalk.red(`❌ Error: Component '${component}' (${targetFileName}.jsx) not found.`));
      console.log(chalk.yellow(`Check the available components at https://glasio-ui.vercel.app/`));
      process.exit(1);
    }

    const sourceFile = matches[0];
    const fileName = path.basename(sourceFile);
    
    const targetDir = path.join(process.cwd(), 'components');
    const targetFile = path.join(targetDir, fileName);

    fs.ensureDirSync(targetDir);
    
    if (fs.existsSync(targetFile)) {
      console.log(chalk.yellow(`⚠️  Warning: ${fileName} already exists in your components directory.`));
      // In a real CLI, we might prompt for overwrite, but for now we'll just overwrite
      console.log(chalk.cyan(`Overwriting existing file...`));
    }

    try {
      fs.copySync(sourceFile, targetFile);
      console.log(chalk.green(`\n✨ Success! Added ${chalk.bold(fileName)} to your project.`));
      console.log(chalk.gray(`\nLocation: ./components/${fileName}`));
      console.log(chalk.cyan(`\nDon't forget to import it in your code:`));
      console.log(chalk.white(`import ${fileName.replace('.jsx', '')} from './components/${fileName.replace('.jsx', '')}';\n`));
    } catch (err) {
      console.error(chalk.red(`\n❌ Error copying file: ${err.message}`));
    }
  });

program.parse(process.argv);
