const { getPersonId } = require('../helpers/utils');
const uuidTest = require('../helpers/uuidTest');

module.exports = (req, res) => {
  const pId = getPersonId(req.url);
  console.log('pId from delete', pId);
  switch (req.url) {
    case `/person/${pId}`:
      const personExists = req.person.find((p) => p.id === pId);
      console.log('personExists from delete', personExists);
      if (!personExists) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write(`Person ID '${pId}' has not been found.`);
        res.end();
      }
      const personIdIsUuid = uuidTest(pId);
      if (personIdIsUuid) {
        console.log('personIdIsUuid from delete', personIdIsUuid);
        res.statusCode = 204;
        res.setHeader('Content-Type', 'application/json');
        req.person.splice(pId, 1);
        res.write(JSON.stringify(req.person));
        res.end();
      } else {
        res.statusCode = 400;
        res.write(`Person ID is '${pId}' is not an uuid`);
        res.end();
      }
      break;
    // response for unexpected delete requests
    default:
      res.statusCode = 400;
      res.write(`CANNOT DELETE ${req.url}`);
      res.end();
  }
};
