import express from 'express';

const app = express();

const PORT = 8002;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
  return res.end(`
      <html>
        <head>
          <title>Node Server</title>
        </head>
        <body>
          <h1>Hello Express Server</h1>
        </body>
      </html>
      `);
});

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>');
});

app.listen(PORT, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});
