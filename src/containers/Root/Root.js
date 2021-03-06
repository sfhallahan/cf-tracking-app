import React from 'react'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import * as reducers from 'redux/modules'
import getRoutes from 'config/routes'
import { muiThemeObj } from 'config/appTheme'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme(muiThemeObj);

const store = createStore(
  combineReducers({...reducers, routing: routerReducer}), compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
))


function checkFetching () {
  const isFetching = store.getState().users.isFetching
  return isFetching
}

function checkAuth () {
  const isAuthed = store.getState().users.isAuthed
  return isAuthed
}


const history = createBrowserHistory()



export default function Root (props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        {getRoutes(checkAuth, history, checkFetching)}
      </Provider>
    </MuiThemeProvider>
)}
