import { GetAllMaps } from 'rules'
import { Router } from 'express'

export class GetAllMapsController {
  constructor(
        readonly server: Router,
        readonly useCase: GetAllMaps,
  ) {
    server.get('/maps', async (_, response) => {
      try {
        const maps = await useCase.execute()
        response.json(maps.map((map) => map.props))
      } catch (error: unknown) {
        if (error instanceof Error) {
          response.status(400).json({ erro: error.message })
        }
      }
    })
  }
}
