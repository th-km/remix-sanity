export type SanityBlockContent = any[]

export type SanitySlug = {
  _type: 'slug'
  current: string
}

export type SanityImage = {
  _type: string
  asset: {
    _type: 'reference'
    _ref: string
  }
}

export type Movie = {
  _id: string
  slug: SanitySlug
  title: string
  overview: SanityBlockContent
  poster: SanityImage
  castMembers: CastMember[]
}

export type MovieList = Pick<Movie, '_id' | 'slug' | 'title'>

export type CastMember = {
  _key: string
  characterName: string
}
