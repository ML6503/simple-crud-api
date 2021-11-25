const uuidTest = require("../helpers/uuidTest");

module.exports = (req, res) => {
  switch (req.url) {
    case "/person":
      const id = req.query.searchParams.get("personId");

      //   if (uuidTest(id)) {
      if (req.query.searchParams.get("personId")) {
        console.log("we are in if get id");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.person[id])); /// CORRECT!!!!
        res.end();
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.person));
        res.end();
      }
      break;
    // res for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`Bad Request on ${req.url}`);
      res.end();
  }
};
