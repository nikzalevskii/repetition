'use client'

import {
  Toggle,
  ToggleCompound,
  ToggleWithNewButton,
} from '@/app/patterns/compound/Toggle'

export default function CompoundComponent() {
  return (
    <div>
      <ToggleCompound initialValue={false}>
        <ToggleCompound.Switch />
        <ToggleCompound.On />
        <ToggleCompound.Off />
      </ToggleCompound>
    </div>
  )
}
