'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const DynamicSlowComponent = dynamic(
  () => import('@/app/components/SlowComponent').then(mod => mod.SlowComponent),
  { ssr: false, loading: () => <p className="animate-pulse">Loading...</p> }
)
// const DynamicSlowComponent = dynamic(
//   () => import('@/app/components/SlowComponent').then(mod => mod.SlowComponent),
//   { ssr: false }
// )

export default function Lazy() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="p-8">
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        switch
      </button>
      {isVisible && <DynamicSlowComponent />}
    </div>
  )
}
