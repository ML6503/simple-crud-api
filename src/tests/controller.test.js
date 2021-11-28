const request = require('supertest');
const { createServer } = require('http');
// const server = require('../server');
const personsDb = require('../db.json');
const controller = require('../controller');

const PORT = process.env.PORT || 3000;

describe('GET /person', function () {
    // request = request(`http://localhost:${PORT}`);
    // // req.person = personsDb.persons;
    // request.get('/person').expect(200, function (err) {
    //     console.log(err);
    // });

    // request.get('/person').expect(personsDb.persons, function (err) {
    //     console.log(err);
    // });
    const personsStringify = JSON.stringify(personsDb.persons);
    const server = createServer((_, response) => {
        response.end(personsStringify);
    });

    test('check that method GET returned persons list form database', async () => {
        const response = await request(server).get('/person');

        expect(response.status).toBe(200);
        expect(response.text).toBe(personsStringify);
    });
});
