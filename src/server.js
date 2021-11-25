const http = require("http");
require("dotenv").config();
const get = require("./methods/get");
const post = require("./methods/post");
const put = require("./methods/put");
const deleteReq = require("./methods/delete");

const PORT = process.env.PORT || 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  switch (req.method) {
    case "GET":
      get(req, res);
      break;

    case "POST":
      post(req, res);
      break;

    case "PUT":
      put(req, res);
      break;

    case "DELETE":
      deleteReq(req, res);
      break;

    default:
      // response for requests with no other response
      response.statusCode = 400;
      response.write("No Response");
      response.end();
  }
});

server.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`listening on port ${PORT}`);
});
