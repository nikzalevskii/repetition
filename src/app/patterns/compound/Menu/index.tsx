'use client'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface MenuContextProps {
  openGroup: string | null
  setOpenGroup: (group: string | null) => void
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

export const MenuAccordion = ({ children }: { children: React.ReactNode }) => {
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const handleSetOpenGroup = useCallback((group: string | null) => {
    setOpenGroup(group)
  }, [])

  const contextValue = useMemo(
    () => ({
      openGroup,
      setOpenGroup: handleSetOpenGroup,
    }),
    [openGroup, handleSetOpenGroup]
  )

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}

const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuAccordion')
  }
  return context
}

MenuAccordion.Group = function MenuGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const { openGroup, setOpenGroup } = useMenu()
  const isOpen = openGroup === title

  const handleOpenGroup = useCallback(() => {
    setOpenGroup(isOpen ? null : title)
  }, [isOpen, setOpenGroup, title])

  return (
    <div>
      <button className="text-xl hover:underline" onClick={handleOpenGroup}>
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  )
}

MenuAccordion.Title = function MenuTitle({ title }: { title: string }) {
  return <button className="text-xl font-bold text-white">{title}</button>
}

MenuAccordion.Item = function MenuItem({ title }: { title: string }) {
  return (
    <div>
      <div>{title}</div>
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
