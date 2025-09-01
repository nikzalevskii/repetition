'use client'

import React from 'react'

export const useIsAuthorized = () => {
  return false
}

export const useVerySlowHook = () => {
  const startTime = performance.now()
  while (performance.now() - startTime < 3000) {}
}

export function SlowComponentWithHook() {
  useVerySlowHook()

  return <div className="text-2xl font-bold purple-500">Very Slow</div>
}
