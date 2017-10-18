import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkout } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as newWorkoutModalActionCreators from 'redux/modules/newWorkoutModal'

class NewWorkoutContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      workoutGoal: '',
      newWorkoutStepNumber: 1,
      workoutStyle: null,
      movements: {},
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectWorkout = this.handleSelectWorkout.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleModalClose() {
    // clear form state in container
    this.setState({
      workoutGoal: '',
      newWorkoutStepNumber: 1,
      workoutStyle: null,
      movements: {},
    })
    // update modal state in redux
    this.props.closeNewWorkoutModal()

  }

  handleChange(e, field) {
    console.log(`{${field}: ${e.target.value}}`)
    this.setState({ [`${field}`]: e.target.value})
  }

  handleSelectWorkout(workout) {
    this.setState({
      newWorkoutStepNumber: 2,
      workoutStyle: workout.value,
      workoutGoal: workout.goal,
    })
  }

  handlePage2Back() {
    this.setState({
      newWorkoutStepNumber: 1,
      workoutStyle: null,
      movements: {},
    })
  }

  render () {
    return (
      <NewWorkout
        openNewWorkoutModal={this.props.openNewWorkoutModal}
        isOpen={this.props.isOpen}
        workoutGoal={this.state.workoutGoal}
        handleChange={this.handleChange}
        handleSelectWorkout={this.handleSelectWorkout}
        newWorkoutStepNumber={this.state.newWorkoutStepNumber}
        handleModalClose={this.handleModalClose}

      />
    )
  }
}

NewWorkoutContainer.propTypes = {
  openNewWorkoutModal: PropTypes.func.isRequired,
  closeNewWorkoutModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

function mapStateToProps({newWorkoutModal}) {
  return {
    isOpen: newWorkoutModal.isOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(newWorkoutModalActionCreators, dispatch)
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NewWorkoutContainer)
