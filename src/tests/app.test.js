const request = require('supertest')
const app = require('../app')

describe('GET Endpoints', () => {
  it('should return "Hello World', async () => {
    const res = await request(app)
      .get('/v1')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello World')
  })
})
