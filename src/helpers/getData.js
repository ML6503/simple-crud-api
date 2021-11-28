module.exports = (req, res, method) => {
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
};
