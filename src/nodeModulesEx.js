import path from 'path';
import url from 'url';

export const getPath = () => {
  const filePath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
  return filePath;
};

export const getURLParse = (myUrl) => url.parse(myUrl, true);
