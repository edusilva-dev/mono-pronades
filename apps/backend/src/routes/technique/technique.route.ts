import { Router } from 'express'

const techniqueRoutes = Router()

techniqueRoutes.get('/techniques', async (req, res) => {
  res.send({ techniques: [
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

export { techniqueRoutes }
