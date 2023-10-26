import { Entity } from "../../../shared/entity"
import { Slug } from "../../../shared/slug"

export interface MapProps {
  id?: string
  name: string
  slug: string
}

export class Map extends Entity<MapProps> {
  readonly name: string
  readonly slug: Slug

  constructor(props: MapProps) {
    super(props)
    this.name = props.name
    this.slug = new Slug(props.slug)
  }
}
