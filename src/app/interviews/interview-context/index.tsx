'use client'
import React, { createContext, useCallback, useContext } from 'react'

interface ContextProps {
  handleClick: () => void
}

const InterviewContext = createContext<ContextProps>({ handleClick: () => {} })

export const InterviewChildComponent = () => {
  const { handleClick } = useContext(InterviewContext)
  return <button onClick={handleClick}>Click</button>
}

export default function InterviewApp() {
  const handleClick = useCallback(() => {
    console.log('click')
  }, [])
  return (
    <InterviewContext.Provider value={{ handleClick }}>
      <div>
        <h2>Start editing to see some magic</h2>
        <InterviewChildComponent />
      </div>
    </InterviewContext.Provider>
  )
}

type Acc = number[]

const result = [1, 2, 3].reduce((acc, item) => {
  return [...acc, item]
}, [] as Acc)
console.log(`sum result = ${result}`)

type Persone = {
  name: string
  age: number
}

const peoples: Persone[] = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 21 },
  { name: 'Jim', age: 22 },
  { name: 'Jill', age: 23 },
  { name: 'Jack', age: 24 },
  { name: 'Jill', age: 124 },
  { name: 'Jack', age: 26 },
  { name: 'Jill', age: 27 },
]

//проверим все ли совершеннолетние
const isAllAdult = peoples.every(person => person.age >= 18)
console.log(`isAllAdult = ${isAllAdult}`)

type ViewProps = { id: string; name: string }
type View = React.FC<ViewProps>

const ViewComp1: View = props => <div>{JSON.stringify(props)}</div>

export const HOCTest = (Component: View) => {
  return function EnhancedComponent(props: ViewProps) {
    return <Component {...props} />
  }
}

const Next = HOCTest(ViewComp1)

export const InterviewApp1 = () => {
  return (
    <div className="mt-2">
      <ViewComp1 id="1" name="John" />
    </div>
  )
}
