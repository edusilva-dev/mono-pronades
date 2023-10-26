import { GetMap } from 'rules'
import { Router } from 'express'
import { TypedRequestBody } from '../../shared/types/typed-request-body.type'

export class GetMapController {
  constructor(
        readonly server: Router,
        readonly useCase: GetMap,
  ) {
    server.get('/maps/:id', async (request: TypedRequestBody<{ mapId: string }>, response) => {
      try {
        const { mapId } = request.body
        const map = await useCase.execute(mapId)
        if (map) {
          return response.json(map.props)
        }

        response.json(null)
      } catch (error: unknown) {
        if (error instanceof Error) {
          response.status(400).json({ erro: error.message })
        }
      }
    })
  }
}
