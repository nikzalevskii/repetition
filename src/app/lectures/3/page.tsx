import { HOCExample } from '@/app/patterns/hoc/example-1'
import Link from 'next/link'

export default function HOC() {
  return (
    <div className="p-8">
      <Link
        className="text-xl text-black hover:underline hover:text-blue-200 transition-colors"
        href="/"
      >
        Назад
      </Link>
      <div>HOC Lecture</div>
      <HOCExample />
    </div>
  )
}
