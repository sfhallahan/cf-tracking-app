import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { NavContainer, LandingContainer,
        AuthContainer, LogContainer } from 'containers'
import { ConnectedRouter as Router } from 'react-router-redux'

export default function getRoutes(checkAuth, history) {
  console.log(history)
  return (
    <Router history={history}>
      <div>
        <NavContainer />
        <PublicRoute exact path='/' component={LandingContainer} checkAuth={checkAuth} />
        <PublicRoute exact path='/login' component={AuthContainer} checkAuth={checkAuth} />
        <PrivateRoute exact path='/workout-log' component={LogContainer} checkAuth={checkAuth} />
      </div>
    </Router>
  )
}

function PrivateRoute ({component: Component, checkAuth, ...rest}) {
  const isAuthed = checkAuth()
  return (
    <Route
      {...rest}
      render={() => isAuthed === true
        ? <Component />
        : <Redirect to='/login' />
      }
    />
  )
}

function PublicRoute ({component: Component, checkAuth, ...rest}) {
  const isAuthed = checkAuth()
  return (
    <Route
      {...rest}
      render={() => isAuthed === true
        ? <Redirect to='/workout-log' />
        : <Component />
      }
    />
  )
}
