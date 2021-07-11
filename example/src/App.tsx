import React from 'react'

import 'react-simple-flags/dist/index.css'
import { useReactSimpleFlags } from 'react-simple-flags'

const App = () => {
  const isAdmin = useReactSimpleFlags('isAdmin')
  const isFunny = useReactSimpleFlags('isFunny')
  return (<div><p>Bonjour, {isAdmin ? 'you are admin' : 'you are not admin'}.</p><p>{isFunny ? 'And you are funny!' : "But you are not funny"}</p></div>);
}

export default App
