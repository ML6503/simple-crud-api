const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  switch (req.method) {
    case "GET":
      switch (req.url) {
        // response for unexpected get requests
        default:
          res.statusCode = 400;
          res.write(`Bad Request on ${req.url}`);
          res.end();
      }
      break;

    case "POST":
      break;

    case "PUT":
      break;

    case "DELETE":
      break;

    default:
      // Send response for requests with no other response
      response.statusCode = 400;
      response.write("Bad Request");
      response.end();
  }
});

server.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`listening on port ${PORT}`);
});
