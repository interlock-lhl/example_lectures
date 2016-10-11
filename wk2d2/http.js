const http = require('http');

const hostname = '127.0.0.1'; // 0.0.0.0
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Path:", req.url, "Method:", req.method);
  var message;
  if (req.url === '/') {
    message = "<html><header><title>Welcome!</title></header><body><h1>Welcome to my site</h1></body></html>";
  } else if (req.url === '/about') {
    message = "<html><header><title>About Us</title></header><body><h1>We are a HTTP test site</h1></body></html>";
  } else if (req.url === '/') {
    // check if this file exists, if not 404
    // open file
    // read its contents
    // set my header content-type application/css
    // req.end(file_contents)
  } else {
    res.statusCode = 404;
    return res.end();
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(message + "\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
