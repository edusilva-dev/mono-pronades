import { Entity } from '../../../shared/private/entity'
import { Slug } from '../../../shared/public/slug'

export interface MapProps {
  id?: string
  name?: string
  slug?: string
}

export class Map extends Entity<MapProps> {
  readonly name?: string
  readonly slug?: Slug

  constructor(props: MapProps) {
    super(props)
    if (props.name) this.name = props.name
    if (props.slug) this.slug = new Slug(props.slug)
  }
}
