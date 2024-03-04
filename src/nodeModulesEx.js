import path from 'path';
import url from 'url';
import querystring from 'querystring';
import os from 'os';

export const getPath = () => {
  const filePath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
  return filePath;
};

export const getURLParse = (myUrl) => url.parse(myUrl, true);

export const parsedQuery = (myQuery) => querystring.parse(myQuery);

export const getOSDetails = () => {
  console.log('Total Memory: ', os.totalmem() / 1024 / 1024, 'MB');
  console.log('Free Memory: ', os.freemem() / 1024 / 1024, 'MB');
  console.log('CPUs: ', os.cpus().length);
  console.log('arch: ', os.arch());
  console.log('OS Name: ', os.platform());
};
