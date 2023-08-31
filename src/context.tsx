import React from 'react'

export type ReactSimpleFlagsProps = Map<string, boolean>

export const ReactSimpleFlagsContext =
  React.createContext<ReactSimpleFlagsProps>(new Map<string, boolean>())
