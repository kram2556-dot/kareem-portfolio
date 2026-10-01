'use strict';
const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../src/pug/index.html');
const destination = path.resolve(__dirname, '../index.html');

fs.copyFileSync(source, destination);
console.log(`### INFO: Copied ${source} to ${destination}`);
