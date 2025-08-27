import {
  CompoundComponent,
  MenuCompound,
} from '@/app/patterns/compound/CompoundComponent'
import Link from 'next/link'

export default function CompoundComponentsLecture() {
  return (
    <div className="p-8">
      <Link
        className="text-xl hover:underline hover:text-blue-200 transition-colors"
        href="/"
      >
        Назад
      </Link>
      <div className="text-2xl font-bold">CompoundComponents Lecture</div>
      <CompoundComponent />
      <MenuCompound />
    </div>
  )
}
