import { formatUserWorkout } from 'helpers/utils'
import { saveNewWorkout } from 'helpers/api'

const FETCHING_USER_WORKOUTS = 'FETCHING_USER_WORKOUTS'
// eslint-disable-next-line
const FETCHING_USER_WORKOUTS_SUCCESS = 'FETCHING_USER_WORKOUTS_SUCCESS'
const FETCHING_USER_WORKOUTS_ERROR = 'FETCHING_USER_WORKOUTS_ERROR'
const REMOVE_FETCHING_USER_WORKOUTS = 'REMOVE_FETCHING_USER_WORKOUTS'
const ADD_USER_WORKOUT = 'ADD_USER_WORKOUT'

// action creators
function fetchingUserWorkouts() {
  return {
    type: FETCHING_USER_WORKOUTS,
  }
}

function removeFetchingUserWorkouts() {
  return {
    type: REMOVE_FETCHING_USER_WORKOUTS,
  }
}

function fetchingUserWorkoutsError(error) {
  console.warn(error)
  return {
    type: FETCHING_USER_WORKOUTS_ERROR,
    error: 'Error saving or fetching workouts'
  }
}

function addUserWorkout(workoutId, date, workoutStyle, details) {
  return {
    type: ADD_USER_WORKOUT,
    workoutId,
    date,
    workoutStyle,
    details
  }
}

// Thunks
export function handleAddNewWorkout(date, workoutStyle, details) {
  return function(dispatch, getState) {
    const uid = getState().users.authedId
    console.log(uid)
    dispatch(fetchingUserWorkouts())
    const workout = formatUserWorkout(uid, date, workoutStyle, details)
    return saveNewWorkout(workout)
      .then((workout) => dispatch(addUserWorkout(workout.workoutId, workout.date, workout.workoutStyle, workout.details)))
      .then(() => dispatch(removeFetchingUserWorkouts()))
      .catch((e) => dispatch(fetchingUserWorkoutsError(e)))
  }
}

// Reducers
const initialState={
  isFetching: false,
  error: '',
  workouts: {},
}

export default function userWorkouts(state=initialState, action) {
  switch (action.type) {
    case FETCHING_USER_WORKOUTS:
      return {
        ...state,
        isFetching: true,
      }
    case REMOVE_FETCHING_USER_WORKOUTS:
      return {
        ...state,
        isFetching: false,
      }
    case FETCHING_USER_WORKOUTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ADD_USER_WORKOUT:
      return {
        ...state,
        [action.workoutId]: {
          date: action.date,
          workoutStyle: action.workoutStyle,
          details: action.details,
      }
    }
    default:
      return state
  }
}
