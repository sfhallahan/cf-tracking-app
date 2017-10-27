import React from 'react'
import { Log } from 'components'
import { NewWorkoutContainer, SidebarContainer } from 'containers'
import { contentContainer } from 'sharedStyles/styles.css'

class LogContainer extends React.Component {
  render() {
    return (
      <div className={contentContainer}>
        <SidebarContainer activeLink='workoutLog' />
        <Log />
        <NewWorkoutContainer />

      </div>
    )
  }
}

export default LogContainer
