{
  users: {
  isFetching,
  error,
  isAuthed,
  authedId,
  [uid]: {
    lastUpdated,
    info: {
      name,
      uid,
      avatar,
    }
  }
},
usersWorkouts {
  userId,
  [workoutId]: {
    type,
    date,
    details: {
      [ set ]: {
        [movement]:

    }
  }
},
newWorkoutModal: {
  isOpen,
}
