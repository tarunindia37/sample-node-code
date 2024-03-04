import http from 'http';

const PORT = 8001;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
  const { url, headers, body, method, host, protocol, ip } = req;
  if (url !== '/favicon.ico') {
    console.log('request header', headers);
    console.log('request received', url);
    console.log('request body', body);
    console.log('request host', host);
    console.log('request protocol', protocol);
    console.log('request method', method);
    res.end('Hello Server!!');
  }
});

server.listen(PORT, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});
