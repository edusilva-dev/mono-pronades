import { UseCase } from '../../../shared/private/use-case'
import { Map } from '../model/map'
import { MapRepository } from '../provider/map-repository'

export class CreateMap implements UseCase<Map, Map> {
  constructor(private readonly repository: MapRepository) {}

  async execute(map: Map): Promise<Map> {
    return await this.repository.createMap(map)
  }
}
