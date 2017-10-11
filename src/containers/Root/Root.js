import React from 'react'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import * as users from 'redux/modules/users'
import getRoutes from 'config/routes'


const store = createStore(
  combineReducers({...users, routing: routerReducer}), compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
))


function checkAuth (nextState, replace) {
  const isAuthed = store.getState().users.isAuthed
  const isFetching = store.getState().users.isFetching
  if ( isFetching === true ) {
    return
  } else {
    return isAuthed
  }
}


const history = createBrowserHistory()



export default function Root (props) {
  console.log(history)
  return (
    <Provider store={store}>
      {getRoutes(checkAuth, history)}
    </Provider>
)}
