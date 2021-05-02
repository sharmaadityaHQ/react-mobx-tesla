import React from 'react'
import { Router } from '@reach/router'

import Welcome from './Welcome'
import Home from './Home'
import Ac from './Ac'

const App = () => {
  return (
    <Router>
      <Welcome path='/' />
      <Home path='/home' />
      <Ac path='home/ac' />
    </Router>
  )
}

export default App;
