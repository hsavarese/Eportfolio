const fs = require('fs-extra');
const path = require('path');

// Ensure dist directory exists
fs.ensureDirSync('dist');

// Copy HTML files
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  fs.copySync(file, path.join('dist', file));
});

// Copy images
fs.copySync('images', 'dist/images');

// Create dist/scripts directory
fs.ensureDirSync('dist/scripts');

console.log('Build completed successfully!'); 