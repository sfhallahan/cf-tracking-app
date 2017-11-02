import React from 'react'
import { NewWorkoutPageOne } from 'components'

class NewWorkoutPageOneContainer extends React.Component {
  render () {
    return (
      <NewWorkoutPageOne
        workoutGoal={this.props.workoutGoal}
        workoutStyle={this.props.workoutStyle}
        handleChange={this.props.handleChange}
        handleSelectWorkout={this.props.handleSelectWorkout}
        error={this.props.error} />

    )
  }
}

export default NewWorkoutPageOneContainer
