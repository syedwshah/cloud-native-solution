const express = require('express')
const request = require('supertest')
const router = require('../routes/user')

const app = express();

// Add your route modules to the Express app.
app.use('/', router);

describe('User Routes', () => {
  test('respond to /ping', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(JSON.stringify({
      success: true,
      message: "Pinged User API"
    }));
  })
});

