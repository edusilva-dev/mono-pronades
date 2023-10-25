import { Router } from 'express'

const mapRoutes = Router()

mapRoutes.get('/maps', async (req, res) => {
  res.send({ maps: [
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

export { mapRoutes }
