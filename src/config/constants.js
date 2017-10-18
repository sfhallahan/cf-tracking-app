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

const setsWorkout = {
  goal: 'sets',
  value: 'sets',
  title: 'Sets',
  description: 'Single movement with '
}

const oneRepMaxWorkout = {
  goal: 'sets',
  value: 'oneRepMax',
  title: 'One Rep Max',
  description: 'Maximum weight for one rep of a movement'
}

const roundsForTimeWorkout = {
  goal: 'time',
  value: 'rft',
  title: 'Rounds for Time (RFT)',
  description: 'One or more rounds for time',
}

export const workoutStyles = [setsWorkout, oneRepMaxWorkout, roundsForTimeWorkout]

const movements = ['Deadlift', 'Power Clean', 'Hang Clean', 'High Hang Clean',
                  'Back Squat', 'Front Squat', 'Push Press', 'Push Jerk',
                  'Split Jerk', 'Strict Pull-up', 'Kipping Pull-up', 'Chest-to-bar',
                  'Strict Muscle-up', 'Toes-to-bar', 'Burpee', 'Clean + Jerk']
