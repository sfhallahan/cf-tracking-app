import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkout } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as newWorkoutModalActionCreators from 'redux/modules/newWorkoutModal'

class NewWorkoutContainer extends React.Component {
  render () {
    return (
      <NewWorkout
        openNewWorkoutModal={this.props.openNewWorkoutModal}
        closeNewWorkoutModal={this.props.closeNewWorkoutModal}
        isOpen={this.props.isOpen}
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
