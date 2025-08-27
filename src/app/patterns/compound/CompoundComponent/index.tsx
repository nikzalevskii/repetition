'use client'

import { ToggleCompound } from '@/app/patterns/compound/Toggle'
import { MenuAccordion } from '@/app/patterns/compound/Menu'
import { menuData } from '@/app/patterns/compound/Menu/menuData'

export const CompoundComponent = () => {
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

// Компонент для рендеринга элемента меню
const MenuItem = ({ item }: { item: { id: string; title: string } }) => {
  return <MenuAccordion.Item title={item.title} />
}

export const MenuCompound = () => {
  return (
    <div>
      <MenuAccordion>
        {menuData.map((item: any) => {
          if (item.type === 'item') {
            return <MenuAccordion.Title key={item.id} title={item.title} />
          }
          if (item.type === 'group') {
            return (
              <MenuAccordion.Group key={item.id} title={item.title}>
                {item.items.map((subItem: any) => (
                  <MenuAccordion.Item key={subItem.id} title={subItem.title} />
                ))}
              </MenuAccordion.Group>
            )
          }
          return null
        })}
      </MenuAccordion>
    </div>
  )
}
