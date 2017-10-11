import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/Nav/Nav'
import Sidebar from 'components/Sidebar/Sidebar'
import { connect } from 'react-redux'
import { contentContainer } from 'sharedStyles/styles.css'

class NavContainer extends React.Component {
  render() {
    return (
      <div>
        <Nav
          isAuthed={this.props.isAuthed}
          handleLogout={() => console.log('handle logout')}
        />
      </div>
    )
  }
}

NavContainer.propTypes = {
  isAuthed: PropTypes.bool,
}

NavContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps({users}) {
  return {
    isAuthed: users.isAuthed,
  }
}

export default connect(
  mapStateToProps,
)(NavContainer)
