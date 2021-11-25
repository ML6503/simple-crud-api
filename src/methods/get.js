module.exports = (req, res) => {
  switch (req.url) {
    // response for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`Bad Request on ${req.url}`);
      res.end();
  }
};
