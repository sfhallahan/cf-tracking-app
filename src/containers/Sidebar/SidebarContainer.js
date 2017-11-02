import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Sidebar } from 'components'

class SidebarContainer extends React.Component {
  render () {
    return (
      <Sidebar
        activeLink={this.props.activeLink}
        userInfo={this.props.userInfo} />
    )
  }
}

SidebarContainer.propTypes = {
  activeLink: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
}

function mapStateToProps({users}) {
  return {
    userInfo: users[`${users.authedId}`].info
  }
}
export default connect(
  mapStateToProps,
)(SidebarContainer)
