'use client'

import { ToggleCompound } from '@/app/patterns/compound/Toggle'
import { MenuAccordion } from '../Menu'

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

export const MenuCompound = () => {
  return (
    <div>
      <MenuAccordion>
        <MenuAccordion.Title title="Главная" />
        <MenuAccordion.Group title="Фильм">
          <MenuAccordion.Item title="Топ" />
          <MenuAccordion.Item title="Популярные" />
          <MenuAccordion.Item title="Новые" />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Сериал">
          <MenuAccordion.Item title="Топ" />
          <MenuAccordion.Item title="Популярные" />
          <MenuAccordion.Item title="Новые" />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Служебное">
          <MenuAccordion.Item title="О нас" />
          <MenuAccordion.Item title="Вопросы и ответы" />
          <MenuAccordion.Item title="Контакты" />
        </MenuAccordion.Group>
      </MenuAccordion>
    </div>
  )
}
