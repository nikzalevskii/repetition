import { RenderProp } from '@/app/patterns/render-props/render-prop'
import Link from 'next/link'

export default function RenderPropsLecture() {
  return (
    <div className="p-8">
      <Link
        className="text-xl text-black hover:underline hover:text-blue-200 transition-colors"
        href="/"
      >
        Назад
      </Link>
      <div>RenderProps Lecture</div>
      <RenderProp />
      <div className="mt-4 text-xl font-bold text-green-500">
        Сделать пример с разными попапами, используя паттерн Render Props
      </div>
    </div>
  )
}
