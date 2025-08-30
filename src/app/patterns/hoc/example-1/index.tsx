'use client'

import { useCallback, useState } from 'react'

type IsAuthorized = [boolean, () => void]

const useIsAuthorized = (): IsAuthorized => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const switchAuthorized = useCallback(() => {
    setIsAuthorized(prev => !prev)
  }, [])
  return [isAuthorized, switchAuthorized]
}

const AuthorizedComponent = () => {
  return <div>Только для авторизованных пользователей</div>
}

const UnauthorizedComponent = () => {
  return <div>Только для не авторизованных пользователей</div>
}

interface WithAuthorizeComponentProps {
  isAuthorized: boolean
}

const withAuthorize = (Authorized: React.FC, Unauthorized: React.FC) => {
  return function WithAuthorizeComponent({
    isAuthorized,
  }: WithAuthorizeComponentProps) {
    return isAuthorized ? <Authorized /> : <Unauthorized />
  }
}

const CustomComponent = withAuthorize(
  AuthorizedComponent,
  UnauthorizedComponent
)

export const HOCExample = () => {
  const [isAuthorized, switchAuthorized] = useIsAuthorized()

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold mr-2"
        onClick={switchAuthorized}
      >
        {isAuthorized ? 'Выйти' : 'Войти'}
      </button>
      <CustomComponent isAuthorized={isAuthorized} />
    </>
  )
}
