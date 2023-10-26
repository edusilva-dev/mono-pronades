import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import { Map } from 'rules'

const mapRoutes = Router()
const prisma = new PrismaClient()

mapRoutes.get('/maps', async (_, response: Response) => {
  try {
    const maps = await prisma.map.findMany()
    return response.status(200).json(maps)
  } catch(error) {
    console.error(error)
  }
})

export { mapRoutes }
