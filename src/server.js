const http = require('http');
require('url');
require('dotenv').config();
const get = require('./methods/get');
const post = require('./methods/post');
const put = require('./methods/put');
const deleteReq = require('./methods/delete');
const personsDb = require('./db.json');
const getData = require('./helpers/getData');
const controller = require('./controller');

// const PORT = process.env.PORT || 3000;

// const server = http.createServer();

// server.on('request', (req, res) => {
//     req.person = personsDb.persons;
//     // add query
//     req.query = new URL(req.url, `http://${req.headers.host}`);
//     try {
//         controller(req, res);
//     } catch (e) {
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'application/json');
//         res.write(`Error on server controller: ${e}`);
//         res.end();
//     }
// });

// server.listen(PORT, (err) => {
//     err ? console.error(err) : console.log(`listening on port ${PORT}`);
// });

const app = () => {
  const PORT = process.env.PORT || 3000;

  const server = http.createServer();

  server.on('request', (req, res) => {
    req.person = personsDb.persons;
    // add query
    req.query = new URL(req.url, `http://${req.headers.host}`);
    try {
      controller(req, res);
    } catch (e) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.write(`Error on server controller: ${e}`);
      res.end();
    }
  });

  server.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`);
  });
};
app();
module.exports = { app };
