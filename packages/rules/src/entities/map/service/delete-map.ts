import { UseCase } from "../../../shared/use-case";
import { MapRepository } from "../provider/map-repository";

export class DeleteMap implements UseCase<String, void> {
  constructor(private readonly repository: MapRepository) {}

  async execute(mapId: string): Promise<void> {
    return await this.repository.deleteMap(mapId)
  }
}
