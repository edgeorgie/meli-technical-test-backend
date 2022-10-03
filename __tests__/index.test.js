const app = require('../app')
const request = require('supertest')

describe('GET /items', () => {
  it('responds with 200', async () => {
    const res = await request(app).get('/api/items')
    expect(res.status).toEqual(200)
  })

  it('response body is a JSON', async () => {
    await request(app)
      .get('/api/items/MLA1118931477')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
  })
})

describe('GET /items/:id', () => {
  it('responds with 200', async () => {
    const res = await request(app).get('/api/items/MLA1118931477')
    expect(res.status).toEqual(200)
  })

  it('response body is a JSON', async () => {
    await request(app)
      .get('/api/items/MLA1118931477')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
  })
})

