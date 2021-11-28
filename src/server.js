const http = require('http');
require('url');
require('dotenv').config();
const get = require('./methods/get');
const post = require('./methods/post');
const put = require('./methods/put');
const deleteReq = require('./methods/delete');
const personsDb = require('./db.json');
const getData = require('./helpers/getData');

console.log('people', personsDb.persons[0].id);

const PORT = process.env.PORT || 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    req.person = personsDb.persons;
    // add query
    req.query = new URL(req.url, `http://${req.headers.host}`);

    switch (req.method) {
        case 'GET':
            getData(req, res, get);
            break;

        case 'POST':
            getData(req, res, post);
            break;

        case 'PUT':
            getData(req, res, put);
            break;

        case 'DELETE':
            getData(req, res, deleteReq);
            break;

        default:
            // response for requests with no other response
            response.statusCode = 400;
            response.write('No Response');
            response.end();
    }
});

server.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`);
});
