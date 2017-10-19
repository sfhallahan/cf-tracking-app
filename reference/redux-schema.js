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
workouts {
  [workoutId]: {
    userId,
    type,
    date,
    details: {
      [groupingId]: {
        type: (set, round, buy-in, etc)
        [movement]: {
          name:
          rxReps
          rxWeight:
          rxWeightUnit:
          scaledWeight:
          scaledWeightUnit:

        }

    }
  }
},
newWorkoutModal: {
  isOpen,
}
