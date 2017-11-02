import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkout } from 'components'
import { getDefaultDateValue } from 'helpers/utils'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as newWorkoutModalActionCreators from 'redux/modules/newWorkoutModal'
import * as userWorkoutsActionCreators from 'redux/modules/userWorkouts'

class NewWorkoutContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      workoutGoal: '',
      stepNumber: 1,
      workoutStyle: {},
      details: {},
      date: getDefaultDateValue(Date.now()),
      error: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectWorkout = this.handleSelectWorkout.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handlePage2Next = this.handlePage2Next.bind(this)
    this.handleUpdateSet = this.handleUpdateSet.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleModalClose() {
    // clear form state in container
    this.setState({
      workoutGoal: '',
      stepNumber: 1,
      workoutStyle: {},
      details: {},
      date: getDefaultDateValue(Date.now()),
      error: '',
    })
    // update modal state in redux
    this.props.closeNewWorkoutModal()

  }

  handleChange(field, e) {
    console.log(`{${field}: ${e.target.value}}`)
    this.setState({ [`${field}`]: e.target.value})
  }

  handleSelectWorkout(workout) {
    this.setState({
      workoutStyle: workout,
      error:'',
    })
  }

  handlePage2Back() {
    this.setState({
      stepNumber: 1,
      workoutStyle: {},
      workoutGoal: '',
      details: {},
      date: getDefaultDateValue(Date.now()),
      error: '',
    })
  }

  handlePage2Next(movement, numOfSets, sets) {
    this.setState(() => {
      return {
        details: {
          movement: movement,
          numOfSets: numOfSets,
          sets: sets,
      }
    }})
  }

  handleUpdateSet(field, e) {
    const newDetails = {...this.state.details}
    newDetails.sets[0][`${field}`] = e.target.value

    this.setState(() =>{
      return {
        details: newDetails,
      }
    })
  }

  handleNext(currentPage) {
    if(currentPage === 1 && Object.keys(this.state.workoutStyle).length === 0) {
      this.setState({
        stepNumber: 1,
        error: 'Please select a workout type',
      })
      return
    }
    this.setState({
      stepNumber: currentPage + 1,
      error: '',
    })
  }

  handleBack(currentPage) {
    this.setState({
      stepNumber: currentPage - 1,
    })
  }

  handleSubmit() {
    this.props.handleAddNewWorkout(this.state.date, this.state.workoutStyle, this.state.details)
      .then(() => this.handleModalClose())
  }

  render () {
    return (
      <NewWorkout
        openNewWorkoutModal={this.props.openNewWorkoutModal}
        isOpen={this.props.isOpen}
        workoutGoal={this.state.workoutGoal}
        workoutStyle={this.state.workoutStyle}
        handleChange={this.handleChange}
        handleSelectWorkout={this.handleSelectWorkout}
        stepNumber={this.state.stepNumber}
        handleNext={this.handleNext}
        handleBack={this.handleBack}
        handleModalClose={this.handleModalClose}
        handlePage2Next={this.handlePage2Next}
        details={this.state.details}
        handleUpdateSet={this.handleUpdateSet}
        date={this.state.date}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    )
  }
}

NewWorkoutContainer.propTypes = {
  openNewWorkoutModal: PropTypes.func.isRequired,
  closeNewWorkoutModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleAddNewWorkout: PropTypes.func.isRequired,
}

function mapStateToProps({newWorkoutModal}) {
  return {
    isOpen: newWorkoutModal.isOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...newWorkoutModalActionCreators,
    ...userWorkoutsActionCreators,
  }, dispatch)
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NewWorkoutContainer)
