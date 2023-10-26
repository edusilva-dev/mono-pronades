import { UseCase } from '../../../shared/private/use-case'
import { Map } from '../model/map'
import { MapRepository } from '../provider/map-repository'

export class GetMap implements UseCase<string, Map | null> {
  constructor(private readonly repository: MapRepository) {}

  async execute(mapId: string): Promise<Map | null> {
    return await this.repository.getMap(mapId)
  }
}
