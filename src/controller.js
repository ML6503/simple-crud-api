const get = require('./methods/get');
const post = require('./methods/post');
const put = require('./methods/put');
const deleteReq = require('./methods/delete');
const getData = require('./helpers/getData');

module.exports = (req, res) => {
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
      // res for requests with no other response
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.write('No Response');
      res.end();
  }
};
