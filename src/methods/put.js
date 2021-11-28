const { validate } = require('uuid');
const { getPersonId } = require('../helpers/utils');

module.exports = async (req, res) => {
  const pId = getPersonId(req.url);
  console.log('req.url from put', req.url);

  switch (req.url) {
    case `/person/${pId}`:
      const personExists = await req.person.find((p) => p.id === pId);
      const personIdIsUuid = validate(pId);
      const updatedPersonData = req.body;

      if (personExists) {
        if (personIdIsUuid) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');

          const updatedPerson = {
            id: pId,
            ...updatedPersonData,
          };

          await req.person.splice(pId, 1);
          await req.person.push(updatedPerson);

          res.write(JSON.stringify(req.person.find((p) => p.id === pId)));
          res.end();
        } else {
          res.statusCode = 400;
          res.write(`Person ID is '${pId}' is not an uuid`);
          res.end();
        }
      } else {
        if (!personIdIsUuid) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.write(`Person ID is '${pId}' is not an uuid`);
          res.end();
        } else {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(`Person ID '${pId}' has not been found.`);
          res.end();
        }
      }

      break;
    // response for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`CANNOT PUT ${req.url}`);
      res.end();
  }
};
