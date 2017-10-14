const OPEN_NEW_WORKOUT_MODAL = 'OPEN_NEW_WORKOUT_MODAL'
const CLOSE_NEW_WORKOUT_MODAL = 'CLOSE_NEW_WORKOUT_MODAL'

export function openNewWorkoutModal() {
  return {
    type: OPEN_NEW_WORKOUT_MODAL,
  }
}

export function closeNewWorkoutModal() {
  return {
    type: CLOSE_NEW_WORKOUT_MODAL,
  }
}


const initialState = {
  isOpen: false,
}
export default function newUserModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_NEW_WORKOUT_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_NEW_WORKOUT_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state

  }
}
