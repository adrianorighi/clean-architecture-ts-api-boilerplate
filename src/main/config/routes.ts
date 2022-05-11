import { Express, Router } from 'express'
import * as fs from 'fs'
import * as path from 'path'
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from '../../../docs/swagger.json'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  
  app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  )

  app.use('/v1', router)

  fs.readdirSync(path.join(__dirname, '..', 'routes')).map(async fileName => {
    (await import(`../routes/${ fileName }`)).default(router)
  })
}
