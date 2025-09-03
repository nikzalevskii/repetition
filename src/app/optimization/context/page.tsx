'use client'

import { SlowComponent } from '@/app/components/SlowComponent'
import { createContext, useCallback, useContext, useState } from 'react'

interface ContextProps {
  theme: string
  switchTheme: () => void
}

const ThemeContext = createContext<ContextProps>({
  theme: 'default',
  switchTheme: () => {},
})

const Header = () => {
  const { switchTheme } = useContext(ThemeContext)
  return (
    <header onClick={switchTheme}>
      <button className="bg-orange-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2">
        SwitchTheme
      </button>
    </header>
  )
}

const Content = () => {
  const { theme } = useContext(ThemeContext)
  return <div>{theme}</div>
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('default')
  const switchTheme = useCallback(() => {
    setTheme(currentTheme =>
      currentTheme === 'default' ? 'alternative' : 'default'
    )
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function ContextPage() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <Header />
        <Content />
        <SlowComponent />
      </div>
    </ThemeProvider>
  )
}

// export default function ContextPage() {
//   const [theme, setTheme] = useState('default')
//   const switchTheme = useCallback(() => {
//     setTheme(currentTheme =>
//       currentTheme === 'default' ? 'alternative' : 'default'
//     )
//   }, [])
//   return (
//     <ThemeContext.Provider value={{ theme, switchTheme }}>
//       <div className="p-8">
//         <Header />
//         <Content />
//         <SlowComponent />
//       </div>
//     </ThemeContext.Provider>
//   )
// }
