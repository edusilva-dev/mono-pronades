import { UseCase } from "../../../shared/use-case";
import { Map } from '../model/map'
import { MapRepository } from "../provider/map-repository";

export class GetAllMaps implements UseCase<Map, Map[]> {
  constructor(private readonly repository: MapRepository) {}

  async execute(): Promise<Map[]> {
    return await this.repository.getAllMaps()
  }
}
