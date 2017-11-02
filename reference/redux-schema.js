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
  workouts:{
    [workoutId]: {
      userId,
      workoutStyle,
      date,
      details: { // setting up for sets only for now
        movement,
        numOfSets,
        notes,
        sets: {
            setId,
            rxReps,
            rxWeight,
            rxWeightUnit,
          }
        }
      }
    }
  }
},
newWorkoutModal: {
  isOpen,
},
listeners : {
  [listenerId]: boolean
}
