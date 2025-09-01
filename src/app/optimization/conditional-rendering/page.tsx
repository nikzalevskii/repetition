'use client'

import {
  SlowComponentWithHook,
  useIsAuthorized,
} from '@/app/components/SlowComponentWithHook'

export default function ConditionalRendering() {
  const isAuthorized = useIsAuthorized()
  return <div className="p-8">{isAuthorized && <SlowComponentWithHook />}</div>
}
