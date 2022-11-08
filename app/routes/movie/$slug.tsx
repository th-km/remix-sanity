import { LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { PortableText } from '@portabletext/react'
import type { Movie } from '~/types'
import { urlFor, sanityClient } from '~/lib/sanity'
import { MOVIE_QUERY } from '~/lib/queries'

export async function loader({ params }: LoaderArgs) {
  return await sanityClient.fetch(MOVIE_QUERY, { slug: params.slug })
}

export default function Movie() {
  const movie = useLoaderData<typeof loader>() as Movie

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-4xl font-medium">{movie.title}</h1>

      <PortableText value={movie.overview} />
      <img src={urlFor(movie.poster.asset).url()} alt={movie.title} />
    </div>
  )
}
