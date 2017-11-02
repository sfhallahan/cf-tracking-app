import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC-4j8QFjP-ro7geKo2TXALsJr98UDAVUk",
  authDomain: "cf-tracking-app.firebaseapp.com",
  databaseURL: "https://cf-tracking-app.firebaseio.com",
  projectId: "cf-tracking-app",
  storageBucket: "",
  messagingSenderId: "255278494478"
}

firebase.initializeApp(config)

export const databaseRef = firebase.database().ref()
export const firebaseAuth = firebase.auth



// Define Workout Goals
const setsGoal = {
  value: 'sets',
  text: 'Sets'
}

const timeGoal = {
  value: 'time',
  text: 'For Time',
}

const roundsGoal = {
  value: 'rounds',
  text: 'For Rounds'
}

const repsGoal = {
  value: 'reps',
  text: 'For Reps'
}

export const goals = [setsGoal, timeGoal, roundsGoal, repsGoal]

// Workout Types



const oneRepMaxWorkout = {
  goal: 'sets',
  value: 'XRepMax',
  title: 'X Rep Max',
  description: 'Maximum weight for X rep(s) of a movement'
}
/**
  * workouts to add
  *
const setsWorkout = {
  goal: 'sets',
  value: 'sets',
  title: 'Sets',
  description: 'Single movement for multiple sets '
}

const roundsForTimeWorkout = {
  goal: 'time',
  value: 'rft',
  title: 'Rounds for Time (RFT)',
  description: 'One or more rounds for time',
}
  *
  */

export const workoutStyles = [oneRepMaxWorkout]

export const movements = ['Deadlift', 'Power Clean', 'Hang Clean', 'High Hang Clean',
                  'Back Squat', 'Front Squat', 'Push Press', 'Push Jerk',
                  'Split Jerk', 'Strict Pull-up', 'Kipping Pull-up', 'Chest-to-bar',
                  'Strict Muscle-up', 'Toes-to-bar', 'Burpee', 'Clean + Jerk']


export const weightUnits = ['lbs', 'kgs', 'poods']
