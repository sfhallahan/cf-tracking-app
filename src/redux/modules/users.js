import auth, { logout, saveUser } from 'helpers/auth'
import { formatUserInfo } from 'helpers/utils'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR'

// Action creators
export function authUser(uid) {
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

export function removeFetchingUser() {
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

export function fetchingUserSuccess(uid, userInfo) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    userInfo,
    timestamp: Date.now(),
  }
}


// Thunkzzz
export function fetchAndHandleAuthUser() {
  return function (dispatch) {
    dispatch(fetchingUser())
    return auth()
      .then(({user}) => {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        return dispatch(fetchingUserSuccess(user.uid, userInfo))
      })
      .then(({userInfo}) => saveUser(userInfo))
      .then((user) => dispatch(authUser(user.uid)))
      .catch((error) => dispatch(fetchingUserError))
    }
  }

  export function handleLogoutAndUnauth() {
    return function(dispatch) {
      dispatch(fetchingUser())
      return logout()
        .then(() => {
          dispatch(unauthUser())
          dispatch(removeFetchingUser())
        })
        .catch((e) => fetchingUserError(e))
    }
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
        info: action.userInfo,
        lastUpdated: action.timestamp,
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: true,
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
