import { StateLocation } from '@/app/optimization/state-location'
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
      <StateLocation />
    </div>
  )
}
