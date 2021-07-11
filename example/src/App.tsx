import React from 'react'

import 'react-simple-flags/dist/index.css'
import { useReactSimpleFlags } from 'react-simple-flags'

const App = () => {
  const isAdmin = useReactSimpleFlags('isAdmin')
  const isFunny = useReactSimpleFlags('isFunny')
  return (
    <div style={{ margin: '1rem' }}>
      <h1>⛳️ Flags</h1>
      <p>Change flags.json to edit the values</p>
      <ul>
        <li>{isAdmin ? 'isAdmin in enabled' : 'isAdmin is disabled'}.</li>
        <li>{isFunny ? 'isFunny is enabled' : 'isFunny is disabled'}</li>
      </ul>
    </div>
  )
}

export default App
