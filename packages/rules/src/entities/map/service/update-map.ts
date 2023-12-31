import { UseCase } from '../../../shared/private/use-case'
import { Map } from '../model/map'
import { MapRepository } from '../provider/map-repository'

export interface UpdateProps {
  mapId: string
  map: Partial<Map>
}

export class UpdateMap implements UseCase<UpdateProps, Map> {
  constructor(private readonly repository: MapRepository) {}

  async execute({mapId, map}: UpdateProps): Promise<Map> {
    return await this.repository.updateMap(mapId, map)
  }
}
