module.exports = (req, res) => {
  switch (req.url) {
    // response for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`CANNOT PUT ${req.url}`);
      res.end();
  }
};
