import { Router } from 'express'

const movementRoutes = Router()

movementRoutes.get('/movements', async (req, res) => {
  res.send({ movements: [
    {
      name: 'Mirage',
      slug: 'mirage'
    },
    {
      name: 'Train',
      slug: 'train'
    },
    {
      name: 'Overpass',
      slug: 'overpass'
    },
    {
      name: 'Inferno',
      slug: 'inferno'
    }
  ] })
})

export { movementRoutes }
