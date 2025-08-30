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
      <div className="mt-4 text-xl font-bold text-green-500">
        Сделать пример с разными попапами, используя паттерн HOC
      </div>
    </div>
  )
}
