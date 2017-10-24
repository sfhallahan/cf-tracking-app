import React from 'react'
import { subHeader, contentContainer, centeredContainer } from 'sharedStyles/styles.css'
import { Sidebar } from 'components'

class SettingsContainer extends React.Component {
  render () {
    return (
      <div className={contentContainer}>
        <Sidebar />
        <div className={centeredContainer}>
          <h2 className={subHeader}>{'Settings coming soon too...'}</h2>
        </div>
      </div>
    )
  }
}

export default SettingsContainer
