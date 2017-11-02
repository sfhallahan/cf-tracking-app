import React from 'react'
import { subHeader, contentContainer, centeredContainer } from 'sharedStyles/styles.css'
import { SidebarContainer } from 'containers'


class PersonalRecordsContainer extends React.Component {
  render () {
    return (
      <div className={contentContainer}>
        <SidebarContainer activeLink='personalRecords'/>
        <div className={centeredContainer}>
          <h2 className={subHeader}>{'PRs and weight calcs coming soon!'}</h2>
        </div>
      </div>
    )
  }
}

export default PersonalRecordsContainer
