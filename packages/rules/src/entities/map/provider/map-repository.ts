import { Map } from '../model/map'

export interface MapRepository {
  getAllMaps(): Promise<Map[]>
  getMap(mapId: string): Promise<Map | null>
  createMap(map: Map): Promise<Map>
  updateMap(mapId: string, map: Partial<Map>): Promise<Map>
  deleteMap(mapId: string): Promise<void>
}
