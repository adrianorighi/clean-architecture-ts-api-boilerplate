import express from 'express'

import { setupRoutes } from './routes'

const app = express()

app.use(express.json())

app.use(express.static('docs'))

setupRoutes(app)

export default app
