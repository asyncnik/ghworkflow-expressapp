const request = require('supertest')
const app = require('../index');

describe('API endpoints', () => {
  test('POST /login responds with success:1', async () => {
    const res = await request(app).post('/login')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/)
    expect(res.body).toEqual({ success: 1 })
  })

  test('POST /sinup responds with success:1', async () => {
    const res = await request(app).post('/sinup')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/)
    expect(res.body).toEqual({ success: 2 })
  })
})
