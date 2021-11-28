const { validate } = require('uuid');
const { getPersonId } = require('../helpers/utils');

module.exports = async (req, res) => {
    const pId = getPersonId(req.url);

    switch (req.url) {
        case `/person/${pId}`:
            const personExists = await req.person.find((p) => p.id === pId);
            const personIdIsUuid = validate(pId);

            if (personExists) {
                if (personIdIsUuid) {
                    res.statusCode = 204;
                    res.setHeader('Content-Type', 'application/json');
                    await req.person.splice(pId, 1);
                    res.write(JSON.stringify(req.person));
                    res.end();
                } else {
                    res.statusCode = 400;
                    res.write(`Person ID is '${pId}' is not an uuid`);
                    res.end();
                }
            } else {
                if (!personIdIsUuid) {
                    res.statusCode = 400;
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
        // response for unexpected delete requests
        default:
            res.statusCode = 400;
            res.write(`CANNOT DELETE ${req.url}`);
            res.end();
    }
};
