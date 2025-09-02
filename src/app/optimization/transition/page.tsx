'use client'

import { SlowComponent } from '@/app/components/SlowComponent'
import { useState, useTransition } from 'react'

export default function Transition() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPending, startTransition] = useTransition()

  return (
    <div className="p-8">
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
        onClick={() => startTransition(() => setIsVisible(!isVisible))}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isPending && <div>Loading...</div>}
      {isVisible && <SlowComponent />}
    </div>
  )
}
