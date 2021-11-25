module.exports = (req, res) => {
  switch (req.url) {
    // response for unexpected delete requests
    default:
      res.statusCode = 400;
      res.write(`CANNOT DELETE ${req.url}`);
      res.end();
  }
};
