const axios = require('axios');
const { expect } = require('chai');

const data = require('../env');

describe('GET /api/character/', () => {

  const request = axios.get(`${data.baseUrl}/api/character/`);

  test('status code is 200', async () => {
    const { status } = await request;
    expect(status).to.equal(200);
  });

  test('number of results is 20', async () => {
    const { data } = await request;
    expect(data.results.length).to.equal(20);
  });

});

describe.each(data.pages)('GET /api/character/?page=%i', (page) => {

  const request = axios.get(`${data.baseUrl}/api/character/?page=${page}`);

  test('status code is 200', async () => {
    const { status } = await request;
    expect(status).to.equal(201);
  });

  test('number of results is 20', async () => {
    const { data } = await request;
    expect(data.results.length).to.equal(20);
  });

});