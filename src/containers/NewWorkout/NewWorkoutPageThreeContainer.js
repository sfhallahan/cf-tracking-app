import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkoutPageThree } from 'components'

class NewWorkoutPageThreeContainer extends React.Component {
  render () {
    return (
      <NewWorkoutPageThree
        workoutStyle={this.props.workoutStyle}
        details={this.props.details}
        handleUpdateSet={this.props.handleUpdateSet}
        handleChange={this.props.handleChange}
        date={this.props.date}

      />
    )
  }
}

const { func, object, string } = PropTypes
NewWorkoutPageThreeContainer.propTypes = {
  workoutStyle: object.isRequired,
  details: object.isRequired,
  handleUpdateSet: func.isRequired,
  handleChange: func.isRequired,
  date: string.isRequired,

}

export default NewWorkoutPageThreeContainer
