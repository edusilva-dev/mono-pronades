import { Router } from 'express'
import { CreateMap, GetAllMaps, GetMap } from 'rules'

// Repository
import MapRepositoryPrisma from '../../external/db/map/map-repository-prisma'

// Controllers
import { GetAllMapsController } from '../../adapters/map/get-all-maps.controller'
import { GetMapController } from '../../adapters/map/get-map.controller'
import { CreateMapController } from '../../adapters/map/create-map.controller'

const mapRoutes = Router()
const repository = new MapRepositoryPrisma()

/**
 * GET /maps
 * @returns Array of map
 */
const getAllMaps = new GetAllMaps(repository)
new GetAllMapsController(mapRoutes, getAllMaps)

/**
 * GET /maps/:id
 * @returns Map found by id
 */
const getMap = new GetMap(repository)
new GetMapController(mapRoutes, getMap)

/**
 * POST /maps
 * @returns Map created
 */
const createMap = new CreateMap(repository)
new CreateMapController(mapRoutes, createMap)

export { mapRoutes }
