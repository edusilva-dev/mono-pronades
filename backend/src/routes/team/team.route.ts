import { Router } from 'express'

const teamRoutes = Router()

teamRoutes.get('/teams', async (req, res) => {
  res.send({ teams: [
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

export { teamRoutes }
