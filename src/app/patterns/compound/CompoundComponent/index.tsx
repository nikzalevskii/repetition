'use client'

import {
  Toggle,
  ToggleCompound,
  ToggleWithNewButton,
} from '@/app/patterns/compound/Toggle'

export default function CompoundComponent() {
  return (
    <div className="mt-4">
      <ToggleCompound initialValue={false}>
        <ToggleCompound.CustomSwitch />
        <ToggleCompound.On />
        <ToggleCompound.Off />
      </ToggleCompound>
    </div>
  )
}
