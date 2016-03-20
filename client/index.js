import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Container from './pages/Container.js'

browserHistory.push('/pokedex')

render((
  <Router history={browserHistory}>
    <Route path="pokedex" component={Container} />
  </Router>
), document.getElementById('root'))
