import React from 'react'
import { NewWorkoutPageOne } from 'components'

class NewWorkoutPageOneContainer extends React.Component {
  render () {
    return (
      <NewWorkoutPageOne
        workoutGoal={this.props.workoutGoal}
        handleChange={this.props.handleChange}
        handleSelectWorkout={this.props.handleSelectWorkout} />
    )
  }
}

export default NewWorkoutPageOneContainer
