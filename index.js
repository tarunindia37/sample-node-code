/* eslint-disable no-console */
// Common JS
// const { add } = require('./src/math');
import { add } from './src/math.js';
import {
  writeFileOptSync,
  readFileOptSync,
  writeFileOpt,
} from './src/fileOperations.js';
import { getPath, getURLParse } from './src/nodeModulesEx.js';

console.log('It is my first Node project');
console.log('Adding two numbers', add(2, 3));

writeFileOptSync('Hello world 123!!!');
readFileOptSync();
writeFileOpt('Tarun Kesarwani');
console.log('File Operation Completed!!!');

console.log('file path:', getPath());
console.log('URL Parser', getURLParse('https://example.com/path?query=123'));
