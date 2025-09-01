import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8">
      <div className="text-4xl font-bold mb-8">Обучение по лекциям ШРИ</div>
      <ul className="space-y-4 list-disc list-inside ">
        <li>
          <Link
            className="text-xl hover:underline hover:text-blue-200 transition-colors"
            href="/lectures/1"
          >
            Лекция 1. Compound Components
          </Link>
        </li>
        <li>
          <Link
            className="text-xl hover:underline hover:text-blue-200 transition-colors"
            href="/lectures/2"
          >
            Лекция 1. Render Props
          </Link>
        </li>
        <li>
          <Link
            className="text-xl hover:underline hover:text-blue-200 transition-colors"
            href="/lectures/3"
          >
            Лекция 3. HOC
          </Link>
        </li>
        <li>
          <Link
            className="text-xl hover:underline hover:text-blue-200 transition-colors"
            href="/lectures/4"
          >
            Лекция 4. Train
          </Link>
        </li>
        <li>
          <Link
            className="text-xl hover:underline hover:text-blue-200 transition-colors"
            href="/lectures/5"
          >
            Лекция 5. Оптимизация
          </Link>
        </li>
      </ul>
    </div>
  )
}
