/* eslint-disable no-console */
import { EventEmitter } from 'node:events';

class FileEventEmitter extends EventEmitter {}

const fileEmitter = new FileEventEmitter();

fileEmitter.on('fileWritten', () => {
  console.log('Notification: File write operation completed!!');
});

fileEmitter.on('fileError', () => {
  console.log('Something went wrong in file operation!!');
});

export default fileEmitter;
