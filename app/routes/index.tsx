import { Link } from '@remix-run/react'

export default function Index() {
  const pages = [
    { href: '/admin', title: 'Admin page' },
    { href: '/movie', title: 'Movie page' }
  ]

  return (
    <div className="p-4">
      <h1 className="font-medium text-3xl">Remix + Sanity demo</h1>
      <ul className="list-decimal list-inside mt-4 space-y-1">
        {pages.map(({ href, title }) => (
          <li key={title}>
            <Link to={href} className="bg-slate-200 px-0.5 rounded-sm">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
