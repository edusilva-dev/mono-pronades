import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(process.env.API_PORT, () => {
  console.log(`🔥 Server is running on http://localhost:${process.env.API_PORT}`)
})
