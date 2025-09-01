// src/app/components/SlowComponent/index.tsx
'use client'

import React from 'react'

export function SlowComponent() {
  return (
    <ul className="items">
      {new Array(1000).fill(null).map((_, i) => (
        <Item key={i} index={i} />
      ))}
    </ul>
  )
}

interface ItemProps {
  index: number
}

function Item({ index }: ItemProps) {
  const startTime = performance.now()

  while (performance.now() - startTime < 2) {
    // Do nothing for 2 ms per item to emulate extremely slow code
  }

  return <li className="item">Item #{index + 1}</li>
}
