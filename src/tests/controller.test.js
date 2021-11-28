const request = require('supertest');
const { createServer } = require('http');
// const { app } = require('../server');
const post = require('../methods/post');
const personsDb = require('../db.json');
const controller = require('../controller');
jest.mock('../db.json');
const PORT = process.env.PORT || 3000;

describe('GET /person', function () {
  const personsStringify = JSON.stringify(personsDb.persons);
  const serverTest = createServer((_, response) => {
    response.end(personsStringify);
  });

  afterAll(() => serverTest.close());

  test('check that method GET returns persons empty form database', async () => {
    const response = await request(serverTest).get('/person');

    expect(response.status).toBe(200);
    expect(response.text).toBe(personsStringify);
  });

  test.skip('check that method POST returns new person', async () => {
    function post(url, body) {
      const httpRequest = request(serverTest).post(url);
      httpRequest.send(body);
      httpRequest.set('Accept', 'application/json');
      httpRequest.set('Origin', 'http://localhost:4000');
      return httpRequest;
    }
    const res = await post('/person', {
      name: 'TestName',
      age: 30,
      hobbies: [],
    }).expect(200);
    expect(res.body.person.name).toBe('TestName');
  });
});
