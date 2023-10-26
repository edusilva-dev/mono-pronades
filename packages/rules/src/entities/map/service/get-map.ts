import { UseCase } from "../../../shared/use-case";
import { Map } from '../model/map'
import { MapRepository } from "../provider/map-repository";

export class GetMap implements UseCase<String, Map> {
  constructor(private readonly repository: MapRepository) {}

  async execute(mapId: string): Promise<Map> {
    return await this.repository.getMap(mapId)
  }
}
