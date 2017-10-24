import React from 'react'
import { subHeader, contentContainer, centeredContainer } from 'sharedStyles/styles.css'
import { Sidebar } from 'components'


class PrContainer extends React.Component {
  render () {
    return (
      <div className={contentContainer}>
        <Sidebar />
        <div className={centeredContainer}>
          <h2 className={subHeader}>{'PRs and weight calcs coming soon!'}</h2>
        </div>
      </div>
    )
  }
}

export default PrContainer
