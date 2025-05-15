const fs = require('fs-extra');
const path = require('path');


fs.ensureDirSync('dist');


const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  fs.copySync(file, path.join('dist', file));
});


fs.copySync('images', 'dist/images');

fs.ensureDirSync('dist/scripts');

console.log('Build completed successfully!'); 