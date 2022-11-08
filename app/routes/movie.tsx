import { Link, Outlet, useLoaderData } from '@remix-run/react'
import type { MovieList } from '~/types'
import { sanityClient } from '~/lib/sanity'
import { MOVIES_QUERY } from '~/lib/queries'

export async function loader() {
  return await sanityClient.fetch(MOVIES_QUERY)
}

export default function MovieRouteLayout() {
  const movies = useLoaderData<typeof loader>() as MovieList[]

  return (
    <div className="grid grid-cols-[240px,1fr] gap-4">
      <aside className="flex h-screen flex-col overflow-y-auto bg-slate-100 p-4">
        <div className="sticky top-0 flex items-baseline justify-between pb-0.5">
          <h1 className="font-medium text-xl">Movie page</h1>
          <Link to="/" className="text-xs underline">
            Back
          </Link>
        </div>

        <ul className="mt-8">
          {movies.map(movie => (
            <li key={movie._id}>
              <Link to={movie.slug.current} className="hover:underline">
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
