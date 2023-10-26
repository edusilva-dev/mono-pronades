import { CreateMap, Map, MapProps } from 'rules'
import { Router } from 'express'
import { TypedRequestBody } from '../../shared/types/typed-request-body.type'

export class CreateMapController {
  constructor(
        readonly server: Router,
        readonly useCase: CreateMap,
  ) {
    server.post('/maps', async (request: TypedRequestBody<MapProps>, response) => {
      try {
        const { name, slug } = request.body
        const map = await useCase.execute(new Map({ name, slug }))
        response.json(map.props)
      } catch (error: unknown) {
        if (error instanceof Error) {
          response.status(400).json({ erro: error.message })
        }
      }
    })
  }
}
