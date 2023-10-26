import { Router } from 'express'
import { Map, MapProps, UpdateMap } from 'rules'
import { TypedRequestBody } from '../../shared/types/typed-request-body.type'

export class UpdateMapController {
  constructor(
    readonly server: Router,
    readonly useCase: UpdateMap
  ) {
    server.put('/maps', async (request: TypedRequestBody<{ mapId: string, map: Partial<MapProps>}>, response) => {
      try {
        const { map, mapId } = request.body
        const updatedMap = await useCase.execute({mapId, map: new Map(map)})
      } catch (error) {

      }
    })
  }
}
