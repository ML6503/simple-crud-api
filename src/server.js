const http = require("http");
require("url");
require("dotenv").config();
const get = require("./methods/get");
const post = require("./methods/post");
const put = require("./methods/put");
const deleteReq = require("./methods/delete");
const personsDb = require("./db.json");
const getData = require("./helpers/getData");

console.log("people", personsDb.persons[0].id);

const PORT = process.env.PORT || 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  req.person = personsDb.persons;
  // add query
  req.query = new URL(req.url, `http://${req.headers.host}`);
  console.log("id", req.query.searchParams.get("personId"));
  switch (req.method) {
    case "GET":
      getData(req, res, get);
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
