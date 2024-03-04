import fs from 'fs';
import fileEmitter from './FileEventEmitter.js';
import config from './config.json' assert { type: 'json' };

export const writeFileOptSync = (data) => {
  const result = fs.writeFileSync(config.DEMO_FILE_PATH, data);
  if (result) {
    fileEmitter.emit(config.FILE_ERROR_EVENT);
  }
  fileEmitter.emit(config.FILE_WRITE_EVENT);
};

export const readFileOptSync = () => {
  const data = fs.readFileSync(config.DEMO_FILE_PATH, 'utf-8');
  return data;
};

export const writeFileOpt = (data) => {
  fs.writeFile(config.LOG_FILE_PATH, data, (error) => {
    if (error) {
      fileEmitter.emit(config.FILE_ERROR_EVENT);
    } else {
      fileEmitter.emit(config.FILE_WRITE_EVENT);
    }
  });
};
