import { databaseRef } from 'config/constants'

export function saveNewWorkout(workout) {
  const workoutId = databaseRef.child(`userWorkouts/${workout.uid}`).push().key
  console.log('in save workout.. workoutId:', workoutId)
  return databaseRef.child(`userWorkouts/${workout.uid}/${workoutId}`)
    .set({...workout, workoutId})
    .then(() => ({...workout, workoutId}))
}
