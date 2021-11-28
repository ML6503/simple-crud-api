const { v4: uuidv4 } = require('uuid');
const { checkPersonRequiredProps } = require('../helpers/utils');

module.exports = (req, res) => {
  switch (req.url) {
    case '/person':
      const newPerson = req.body;

      if (checkPersonRequiredProps(newPerson)) {
        newPerson.id = uuidv4();
        req.person.push(newPerson);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(req.person));
        res.end();
      } else {
        res.statusCode = 400;
        res.write(
          'Cannot add new person as not all required properties received or wrong format is used'
        );
        res.end();
      }

      break;
    // response for unexpected requests
    default:
      res.statusCode = 400;
      res.write(`CANNOT POST ${req.url}`);
      res.end();
  }
};
