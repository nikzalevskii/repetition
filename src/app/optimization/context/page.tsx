'use client'

import { SlowComponent } from '@/app/components/SlowComponent'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

type ContextProps = string

type SwitcherContextProps = () => void

const ThemeContext = createContext<ContextProps>('default')

const ThemeSwitcherContext = createContext<SwitcherContextProps>(() => {})

const useTheme = () => {
  return useContext(ThemeContext)
}

const useThemeSwitcher = () => {
  return useContext(ThemeSwitcherContext)
}

const Header = () => {
  const switchTheme = useThemeSwitcher()
  return (
    <header onClick={switchTheme}>
      <button className="bg-orange-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2">
        SwitchTheme
      </button>
    </header>
  )
}

const Content = () => {
  const theme = useTheme()
  return <div>{theme}</div>
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('default')
  const switchTheme = useCallback(() => {
    setTheme(currentTheme =>
      currentTheme === 'default' ? 'alternative' : 'default'
    )
  }, [])

  const value = useMemo(
    () => ({
      theme,
      switchTheme,
    }),
    [theme, switchTheme]
  )

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcherContext.Provider value={switchTheme}>
        {children}
      </ThemeSwitcherContext.Provider>
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
