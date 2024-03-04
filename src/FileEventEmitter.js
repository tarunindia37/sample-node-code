/* eslint-disable no-console */
import { EventEmitter } from 'node:events';
import config from './config.json' assert { type: 'json' };

class FileEventEmitter extends EventEmitter {}

const fileEmitter = new FileEventEmitter();

fileEmitter.on(config.FILE_WRITE_EVENT, () => {
  console.log('Notification: File write operation completed!!');
});

fileEmitter.on(config.FILE_ERROR_EVENT, () => {
  console.log('Something went wrong in file operation!!');
});

export default fileEmitter;
