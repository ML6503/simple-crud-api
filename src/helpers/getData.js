module.exports = (req, res, method) => {
  return new Promise((resolve, reject) => {
    try {
      let data = [];

      req.on('data', (chunk) => {
        data.push(chunk);
      });

      req.on('end', () => {
        req.body = Buffer.concat(data).toString();
        if (req.headers['content-type'] === 'application/json') {
          req.body = JSON.parse(req.body);
        }

        method(req, res);
      });
    } catch (e) {
      console.error(`Error: ${e}`);
      reject(e);
    }
  });
};
