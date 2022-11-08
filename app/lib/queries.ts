export const MOVIES_QUERY = /* groq */ `
  *[_type == 'movie']{
    _id,
    slug,
    title
  }
`

export const MOVIE_QUERY = /* groq */ `
  *[_type == 'movie' && slug.current == $slug][0]{
    title,
    overview,
    poster,
    castMembers[]->{
      _key,
      characterName
    }
  }
`
