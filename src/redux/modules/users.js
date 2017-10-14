import { auth } from 'helpers/auth'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR'

function authUser(uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

function unauthUser() {
  return {
    type: UNAUTH_USER,
  }
}

function fetchingUser() {
  return {
    type: FETCHING_USER,
  }
}

function removeFetchingUser() {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

function fetchingUserError(error) {
  return {
    type: FETCHING_USER_ERROR,
    error: 'Error fetching user',
  }
}

function fetchingUserSuccess(uid, user) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp: Date.now(),
  }
}

// stubbed

export function fetchAndHandleAuthUser() {
  return function (dispatch) {
    dispatch(fetchingUser())
    const user = auth()
      dispatch(fetchingUserSuccess(user.info.uid, user))
      dispatch(authUser(user.info.uid))
    }
    //.catch((error) => dispatch(fetchingUserError(error)))
  }



// Reducers
const initialUserState = {
  info: {},
  lastUpdated: 0,
}

function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
        lastUpdated: action.timestamp,
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
}

export default function users(state=initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      }
    case FETCHING_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: user(state[action.uid], action),
      }
    default:
      return state
  }
}
