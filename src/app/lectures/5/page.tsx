import Link from 'next/link'

export default function Train() {
  return (
    <div className="p-8">
      <Link
        className="text-xl text-black hover:underline hover:text-blue-200 transition-colors"
        href="/"
      >
        Назад
      </Link>
      <div>Оптимизация</div>
      <div>
        <ul>
          <li>
            <Link
              className="text-xl hover:underline hover:text-blue-200 transition-colors"
              href="/optimization/state-location"
            >
              State Location
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:underline hover:text-blue-200 transition-colors"
              href="/optimization/conditional-rendering"
            >
              Conditional Rendering
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:underline hover:text-blue-200 transition-colors"
              href="/optimization/memoization"
            >
              Memoization
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:underline hover:text-blue-200 transition-colors"
              href="/optimization/transition"
            >
              Transition
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
