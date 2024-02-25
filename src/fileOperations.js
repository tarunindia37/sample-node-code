import fs from 'fs';
import fileEmitter from './FileEventEmitter.js';

export const writeFileOptSync = (data) => {
  const result = fs.writeFileSync('logs/demo.txt', data);
  if (result) {
    fileEmitter.emit('fileError');
  }
  fileEmitter.emit('fileWritten');
};

export const readFileOptSync = () => {
  const data = fs.readFileSync('logs/demo.txt', 'utf-8');
  return data;
};

export const writeFileOpt = (data) => {
  fs.writeFile('logs/user-logs.txt', data, (error) => {
    if (error) {
      fileEmitter.emit('fileError');
    } else {
      fileEmitter.emit('fileWritten');
    }
  });
};
