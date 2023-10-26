export class Slug {
  constructor(slug: string) {
    if (slug.indexOf('')) {
      throw new Error('O slug não pode conter espaços')
    }
  }
}
