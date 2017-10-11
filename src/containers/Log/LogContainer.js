import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import Log from 'components/Log/Log'
import { contentContainer } from 'sharedStyles/styles.css'

class LogContainer extends React.Component {
  render() {
    return (
      <div className={contentContainer}>
        <Sidebar />
        <Log />
      </div>
    )
  }
}

export default LogContainer
