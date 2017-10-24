import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { NavContainer, LandingContainer, LogoutContainer, PersonalRecordsContainer,
        SettingsContainer, AuthContainer, LogContainer } from 'containers'
import { ConnectedRouter as Router } from 'react-router-redux'

export default function getRoutes(checkAuth, history, checkFetching) {
  return (
    <Router history={history}>
      <div>
        <NavContainer />
        <PublicRoute exact path='/' component={LandingContainer} checkAuth={checkAuth} checkFetching={checkFetching} />
        <PublicRoute exact path='/login' component={AuthContainer} checkAuth={checkAuth} checkFetching={checkFetching} />
        <Route exact path='/logout' component={LogoutContainer} />
        <PrivateRoute exact path='/workout-log' component={LogContainer} checkAuth={checkAuth} checkFetching={checkFetching} />
        <PrivateRoute exact path='/personal-records' component={PersonalRecordsContainer} checkAuth={checkAuth} checkFetching={checkFetching} />
        <PrivateRoute exact path='/settings' component={SettingsContainer} checkAuth={checkAuth} checkFetching={checkFetching} />
      </div>
    </Router>
  )
}

// Update private routes to handle check fetching
function PrivateRoute ({component: Component, checkAuth, checkFetching, ...rest}) {
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

function PublicRoute ({component: Component, checkAuth, checkFetching, ...rest}) {
  const isFetching = checkFetching()
  const isAuthed = checkAuth()
  if(isFetching === true) {
    return null
  }
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
