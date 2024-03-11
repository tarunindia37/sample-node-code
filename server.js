import http from 'http';
import fs from 'fs';
import URL from 'url';
import querystring from 'querystring';
import { add } from './src/math.js';

const PORT = 8001;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
  const { url, headers, body, method, host, protocol, ip } = req;
  if (url !== '/favicon.ico') {
    const logStr = `${new Date()} ${method} ${url} ${ip} \n`;
    fs.appendFile('logs/server-logs.txt', logStr, (err) => {
      if (err) {
        console.log(err);
      }
      let htmlBody;
      const { pathname, query } = URL.parse(url);

      //console.log(global); // window
      //console.log(process); // node, os, process -- document

      // if (pathname === '/') {
      //   htmlBody = '<h1>Home Page</h1>';
      // } else if (pathname === '/products') {
      //   htmlBody = '<h1>Products Page</h1>';
      // } else if (pathname === '/cart') {
      //   htmlBody = '<h1>Cart Page</h1>';
      // } else if (pathname === '/api/product') {
      //   res.setHeader('Content-Type', 'application/json');
      //   return res.end(JSON.stringify({ id: 111, name: 'aaaa', rate: 121 }));
      // } else if (pathname === '/api/add') {
      //   res.setHeader('Content-Type', 'application/json');
      //   const { num1, num2 } = querystring.parse(query);
      //   const result = add(+num1, +num2);
      //   res.write(JSON.stringify({ result }));
      //   return res.end();
      // }
      // if (pathname === '/login') {
      //   htmlBody = '<h1>Login Page</h1>';
      // } else {
      //   htmlBody = '<h1>404: Not Found!!!</h1>';
      // }

      switch (pathname) {
        case '/':
          htmlBody = '<h1>Home Page</h1>';
          break;
        case '/products':
          htmlBody = '<h1>Products Page</h1>';
          break;
        case '/cart':
          htmlBody = '<h1>Cart Page</h1>';
          break;
        case '/login':
          if (method === 'POST') {
            htmlBody = '<h1>Forget Password</h1>';
          } else if (method === 'PUT') {
            htmlBody = '<h1>Update the password</h1>';
          } else {
            htmlBody = '<h1>Login Page</h1>';
          }
          break;
        case '/api/product':
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ id: 111, name: 'aaaa', rate: 121 }));
        case '/api/add': {
          res.setHeader('Content-Type', 'application/json');
          const { num1, num2 } = querystring.parse(query);
          const result = add(+num1, +num2);
          res.write(JSON.stringify({ result }));
          return res.end();
        }
        default:
          htmlBody = '<h1>404: Not Found!!!</h1>';
      }

      return res.end(`
      <html>
        <head>
          <title>Node Server</title>
        </head>
        <body>
          ${htmlBody}
        </body>
      </html>
      `);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});
