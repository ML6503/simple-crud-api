module.exports = (req, res) => {
  console.log('req.url from put', req.url);
  switch (req.url) {
    // response for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`CANNOT PUT ${req.url}`);
      res.end();
  }
};
