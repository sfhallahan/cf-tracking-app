import React from 'react'
import { subHeader, centeredContainer } from 'sharedStyles/styles.css'

class LogoutContainer extends React.Component {
  render () {
    return (
      <div className={centeredContainer}>
        <h2 className={subHeader}>{'You have been logged out successfully'}</h2>
      </div>
    )
  }
}

export default LogoutContainer
