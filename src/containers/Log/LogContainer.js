import React from 'react'
import PropTypes from 'prop-types'
import { Log } from 'components'
import { NewWorkoutContainer, SidebarContainer } from 'containers'
import { contentContainer } from 'sharedStyles/styles.css'
import { connect } from 'react-redux'
import { fetchUserWorkouts } from 'redux/modules/userWorkouts'

class LogContainer extends React.Component {
  componentDidMount() {
    // Update to use DB listener
    this.props.dispatch(fetchUserWorkouts())
  }

  render() {
    return (
      <div className={contentContainer}>
        <SidebarContainer activeLink='workoutLog' />
        <Log
          isFetching={this.props.isFetching}
          error={this.props.error}
          workouts={this.props.workouts}
        />
        <NewWorkoutContainer />

      </div>
    )
  }
}

LogContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  workouts: PropTypes.object.isRequired,
}

function mapStateToProps({userWorkouts}) {
  return {
    isFetching: userWorkouts.isFetching,
    error: userWorkouts.error,
    workouts: userWorkouts.workouts,
  }
}

export default connect(
  mapStateToProps,
)(LogContainer)
