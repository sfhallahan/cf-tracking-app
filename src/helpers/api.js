import { databaseRef } from 'config/constants'

export function saveNewWorkout(workout) {
  const workoutId = databaseRef.child(`userWorkouts/${workout.uid}`).push().key
  console.log('in save workout.. workoutId:', workoutId)
  return databaseRef.child(`userWorkouts/${workout.uid}/${workoutId}`)
    .set({...workout, workoutId})
    .then(() => ({...workout, workoutId}))
}

export function retrieveUserWorkouts(uid) {
  return databaseRef.child(`userWorkouts/${uid}`).once('value')
    .then((snapshot) => snapshot.val() || {})
}
