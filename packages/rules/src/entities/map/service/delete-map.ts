import { UseCase } from '../../../shared/private/use-case'
import { MapRepository } from '../provider/map-repository'

export class DeleteMap implements UseCase<string, void> {
  constructor(private readonly repository: MapRepository) {}

  async execute(mapId: string): Promise<void> {
    return await this.repository.deleteMap(mapId)
  }
}
