const uuidTest = require('../helpers/uuidTest');

module.exports = (req, res) => {
    // const url = req.url.split('/')[1];
    // console.log('url', url);
    let personId;

    const arrQuery = req.url.split('/');
    arrQuery.find((q, i) => {
        if (q === 'person') {
            personId = arrQuery[i + 1];
        }
    });

    switch (req.url) {
        case `/person/${personId}`:
            // personId is an uuid
            const personIdIsUuid = uuidTest(personId);
            if (personIdIsUuid) {
                const personExists = req.person.find((p) => p.id === personId);

                if (personExists) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.write(JSON.stringify(personExists));
                    res.end();
                } else {
                    res.statusCode = 404;
                    res.write(
                        `Person ID '${personId}' is not found in database.`
                    );
                    res.end();
                }
                //personId is not uuid
            } else {
                res.statusCode = 400;
                res.write(`Person ID '${personId}' is not a valid uuid.`);
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
