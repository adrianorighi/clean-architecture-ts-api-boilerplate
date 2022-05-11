import request from 'supertest'

import app from '../../main/config/app'

describe('Real State Value Route', () => {

  describe('GET /real-state-value', () => {
    test('Should return 200 on get', async () => {
      await request(app)
        .get('/v1/real-state-value')
        .expect(200)
    })
  })
})
