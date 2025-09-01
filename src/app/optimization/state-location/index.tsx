'use client'

import { SlowComponent } from '@/app/components/SlowComponent'
import { useState } from 'react'

export const StateLocation = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
      <SlowComponent />
    </div>
  )
}
