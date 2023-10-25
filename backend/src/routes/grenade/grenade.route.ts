import { Grenade } from '@prisma/client'
import { Router } from 'express'

const grenadeRoutes = Router()

grenadeRoutes.get('/grenades', async (req, res) => {
  res.send(<{ grenades: Grenade[] }>{ grenades: [
    {
      name: 'Janeläo',
      pixelUrl: '',
      videoUrl: '',
      grenadeTypeId: '1',
      mapId: '1',
      teamId: '1',
      movementId: '1',
      techniqueId: '1',
    },
    {
      name: 'L',
      pixelUrl: '',
      videoUrl: '',
      grenadeTypeId: '1',
      mapId: '1',
      teamId: '1',
      movementId: '1',
      techniqueId: '1',
    },
  ] })
})

export { grenadeRoutes }
