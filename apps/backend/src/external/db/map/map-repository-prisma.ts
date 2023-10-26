import { PrismaClient } from '@prisma/client'
import { Map, MapProps, MapRepository } from 'rules'

export default class MapRepositoryPrisma implements MapRepository {
  private readonly prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllMaps(): Promise<Map[]> {
    const maps = await this.prisma.map.findMany()
    return maps.map((map: MapProps) => new Map(map))
  }

  async getMap(mapId: string): Promise<Map | null> {
    const map = await this.prisma.map.findFirst({
      where: {
        id: mapId,
      }
    })

    if (!map) {
      return null
    }

    return new Map(map)
  }

  async createMap(map: Map): Promise<Map> {
    const newMap = await this.prisma.map.create({
      data: map.props
    })
    return new Map(newMap)
  }

  async updateMap(mapId: string, map: Partial<Map>): Promise<Map> {
    const updatedMap = await this.prisma.map.update({
      where: { id: mapId },
      data: map
    })
    return new Map(updatedMap)
  }

  deleteMap(mapId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
