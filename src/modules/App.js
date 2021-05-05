import React from 'react'
import { Router } from '@reach/router'

import Welcome from './Welcome'
import Home from './Home'
import Ac from './Ac'
import Todo from './Todo' //Todo.js is to explore MobX

import { GlobalBase } from '../assets/styles/base'

const App = () => {
  return (
    <>
      <Router>
        <Welcome path='/' />
        <Home path='/home' />
        <Ac path='home/ac' />
        <Todo path='/todo' />
      </Router>
      <GlobalBase />
    </>
  )
}

export default App;
