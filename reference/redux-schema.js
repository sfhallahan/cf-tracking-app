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
userWorkouts {
  isFetching,
  error,
  [workoutId]: {
    userId,
    workoutStyle,
    date,
    details: { // setting up for sets only for now
      movementName,
      numOfSets,
      notes,
      [setId]: {
          rxReps,
          rxWeight,
          rxWeightUnit,
      }
    }
  }
},
newWorkoutModal: {
  isOpen,
}
