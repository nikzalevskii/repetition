'use client'

import { SlowComponent } from '@/app/components/SlowComponent'
import { ButtonLocation } from './Button'

export default function StateLocation() {
  return (
    <div className="p-8">
      <ButtonLocation />
      <SlowComponent />
    </div>
  )
}
