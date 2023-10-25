import { Router } from 'express'
import { mapRoutes } from './map'
import { grenadeRoutes } from './grenade'
import { teamRoutes } from './team'
import { movementRoutes } from './movement'
import { techniqueRoutes } from './technique'

const routes = Router()

routes.use(mapRoutes)
routes.use(grenadeRoutes)
routes.use(teamRoutes)
routes.use(movementRoutes)
routes.use(techniqueRoutes)

export { routes }
