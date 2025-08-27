import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface Props {
  initialValue?: boolean
}

export const Toggle = ({ initialValue = false }: Props) => {
  const [isOn, setIsOn] = useState(initialValue)

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        onClick={() => setIsOn(!isOn)}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold "
      >
        Switch
      </button>
      {isOn && <span className="text-green-500 font-bold">On</span>}
      {!isOn && <span className="text-red-700 font-bold">Off</span>}
    </div>
  )
}

export const ToggleWithNewButton = ({ initialValue = false }: Props) => {
  const [isOn, setIsOn] = useState(initialValue)

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        onClick={() => setIsOn(!isOn)}
        className="bg-orange-500 text-white p-2 rounded-md cursor-pointer font-bold "
      >
        Switch
      </button>
      {isOn && <span className="text-green-500 font-bold">On</span>}
      {!isOn && <span className="text-red-700 font-bold">Off</span>}
    </div>
  )
}

interface ToggleContextProps {
  isOn: boolean
  toggle: () => void
}

const ToggleContext = createContext<ToggleContextProps | undefined>(undefined)

const useToggle = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggle must be used within a ToggleCompound')
  }
  return context
}

interface ToggleCompoundProps {
  children: React.ReactNode
  initialValue?: boolean
}

export const ToggleCompound = ({
  children,
  initialValue = false,
}: ToggleCompoundProps) => {
  const [isOn, setIsOn] = useState(initialValue)

  const toggle = useCallback(() => {
    setIsOn((prev: boolean) => !prev)
  }, [])

  const value = useMemo(
    () => ({
      isOn,
      toggle,
    }),
    [isOn, toggle]
  )
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

ToggleCompound.On = () => {
  const { isOn } = useToggle()
  return isOn ? <span className="text-green-500 font-bold">On</span> : null
}

ToggleCompound.Off = () => {
  const { isOn } = useToggle()
  return !isOn ? <span className="text-red-700 font-bold">Off</span> : null
}

ToggleCompound.Switch = () => {
  const { toggle } = useToggle()
  return (
    <button
      onClick={toggle}
      className="bg-orange-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
    >
      Switch
    </button>
  )
}

ToggleCompound.CustomSwitch = () => {
  const { toggle } = useToggle()
  return (
    <button
      onClick={toggle}
      className="bg-purple-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
    >
      Switch
    </button>
  )
}
