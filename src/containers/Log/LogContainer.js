import React from 'react'
import { Log, Sidebar } from 'components'
import { NewWorkoutContainer } from 'containers'
import { contentContainer } from 'sharedStyles/styles.css'

class LogContainer extends React.Component {
  render() {
    return (
      <div className={contentContainer}>
        <Sidebar
          activeLink='workoutLog'/>
        <Log />
        <NewWorkoutContainer />
      </div>
    )
  }
}

export default LogContainer
