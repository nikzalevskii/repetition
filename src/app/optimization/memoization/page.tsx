'use client'

import { SlowComponent } from '@/app/components/SlowComponent'
import { memo, useState } from 'react'

export default function Memoization() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8">
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      <MemoizedSlowComponent />
    </div>
  )
}

const MemoizedSlowComponent = memo(SlowComponent)
