# react-simple-flags

> Use feature flags in your React app

[![NPM](https://img.shields.io/npm/v/react-simple-flags.svg)](https://www.npmjs.com/package/react-simple-flags)

## Install

```bash
npm install --save react-simple-flags
```

## Usage

### At the root of your app

```tsx
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { ReactSimpleFlagsProvider } from 'react-simple-flags'
import App from './App'
import flags from './flags.json' // you import the initialFlags the way you want

ReactDOM.render(
  <ReactSimpleFlagsProvider initialFlags={flags}>
    <App />
  </ReactSimpleFlagsProvider>,
  document.getElementById('root')
)
```

### In your components

```tsx
import React from 'react'

import 'react-simple-flags/dist/index.css'
import { useReactSimpleFlags } from 'react-simple-flags'

const MyComponent = () => {
  // This will return true is the flag is enabled, otherwise false if the flag is disabled or if it does not exist.
  const hasThisFlag = useReactSimpleFlags('flagName') // flagName correspond to the "name" value in flags.json.
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

export default MyComponent
```

## License

MIT © [emileaublet](https://github.com/emileaublet)
