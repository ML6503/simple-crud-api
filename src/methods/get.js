const uuidTest = require('../helpers/uuidTest');
const { getPersonId } = require('../helpers/utils');

module.exports = (req, res) => {
  // const url = req.url.split('/')[1];
  // console.log('url', url);
  const pId = getPersonId(req.url);

  switch (req.url) {
    // case `/person/${personId}`:

    case `/person/${pId}`:
      // personId is an uuid
      const personIdIsUuid = uuidTest(pId);
      if (personIdIsUuid) {
        const personExists = req.person.find((p) => p.id === pId);

        if (personExists) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.write(JSON.stringify(personExists));
          res.end();
        } else {
          res.statusCode = 404;
          res.write(`Person ID '${pId}' has not been found.`);
          res.end();
        }
        //personId is not uuid
      } else {
        res.statusCode = 400;
        res.write(`Person ID '${pId}' is not a valid uuid.`);
        res.end();
      }
      break;

    case '/person':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(req.person));
      res.end();

      break;
    // res for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`Bad Request on ${req.url}`);
      res.end();
  }
};
