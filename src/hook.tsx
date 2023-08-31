import { useContext } from 'react'
import { ReactSimpleFlagsContext } from './context'

export const useReactSimpleFlags = (flag: string): boolean => {
  const context = useContext(ReactSimpleFlagsContext)
  if (!context) return false

  return Boolean(context.get(flag))
}
