import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import MainContainer from 'containers/Main/MainContainer'
import LandingContainer from 'containers/Landing/LandingContainer'
import AuthContainer from 'containers/Auth/AuthContainer'

export default function getRoutes({history}) {
  return (
    <Router>
      <div>
        <Route path='/' component={MainContainer} />
        <Route exact path='/' component={LandingContainer} />
        <Route exact path='/login' component={AuthContainer} />
      </div>
    </Router>
  )
}
