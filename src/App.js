import React from 'react'
import { Router } from '@reach/router'

import Welcome from './Welcome'
import Home from './Home'
import Ac from './Ac'
import Todo from './Todo'

const App = () => {
  return (
    <Router>
      <Welcome path='/' />
      <Home path = '/home' />
      <Ac path = 'home/ac' />
      <Todo path = '/todo' />
    </Router>
  )
}

export default App;
