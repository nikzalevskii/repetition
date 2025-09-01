'use client'

import { useState } from 'react'

//вынесли состояние в отдельный компонент
export const ButtonLocation = () => {
  const [count, setCount] = useState(0)
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
      onClick={() => setCount(count => count + 1)}
    >
      {count}
    </button>
  )
}
