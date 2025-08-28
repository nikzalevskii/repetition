'use client'

import { memo, useCallback, useState } from 'react'

interface LayoutProps {
  renderHeader?: (isOpen?: boolean) => React.ReactNode
  renderMainContent?: (isOpen?: boolean) => React.ReactNode
  renderSidebarLeft?: (isOpen?: boolean) => React.ReactNode
  renderSidebarRight?: (isOpen?: boolean) => React.ReactNode
  renderFooter?: (isOpen?: boolean) => React.ReactNode
}
export const Layout = ({
  renderHeader,
  renderMainContent,
  renderSidebarLeft,
  renderSidebarRight,
  renderFooter,
}: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <div className="flex flex-col ">
      {renderHeader && (
        <div className="header flex justify-between items-center">
          {renderHeader(isOpen)}
        </div>
      )}
      <button
        className="bg-blue-500 text-white p-2 rounded-md w-1/8"
        onClick={toggle}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div>
        {renderSidebarLeft && (
          <div className="sidebarLeft w-1/4">{renderSidebarLeft(isOpen)}</div>
        )}
        {renderMainContent && (
          <div className="mainContent w-1/2 font-bold">
            {renderMainContent(isOpen)}
          </div>
        )}
        {renderSidebarRight && (
          <div className="sidebarRight w-1/4">{renderSidebarRight(isOpen)}</div>
        )}
      </div>
      {renderFooter && (
        <div className="footer flex justify-between items-center">
          {renderFooter(isOpen)}
        </div>
      )}
    </div>
  )
}

const OpenLeftSidebar = memo(function OpenLeftSidebar() {
  return <div>Open Left Sidebar</div>
})

const CloseLeftSidebar = memo(function CloseLeftSidebar() {
  return <div>Close Left Sidebar</div>
})

const Header = memo(function Header() {
  return <div>Header</div>
})

const MainContent = memo(function MainContent() {
  return <div>Main Content</div>
})

const RightSidebar = memo(function RightSidebar() {
  return <div>Right Sidebar</div>
})

const CloseRightSidebar = memo(function CloseRightSidebar() {
  return <div>Close Right Sidebar</div>
})

const Footer = memo(function Footer() {
  return <div>Footer</div>
})

export const RenderProp = () => {
  const renderHeader = useCallback(() => <Header />, [])
  const renderLeftSidebar = useCallback(
    (isOpen?: boolean) => (isOpen ? <OpenLeftSidebar /> : <CloseLeftSidebar />),
    []
  )
  const renderMainContent = useCallback(() => <MainContent />, [])
  const renderRightSidebar = useCallback(
    (isOpen?: boolean) => (isOpen ? <RightSidebar /> : <CloseRightSidebar />),
    []
  )
  const renderFooter = useCallback(() => <Footer />, [])
  return (
    <Layout
      renderHeader={renderHeader}
      renderMainContent={renderMainContent}
      renderSidebarLeft={renderLeftSidebar}
      renderSidebarRight={renderRightSidebar}
      renderFooter={renderFooter}
    />
  )
}
