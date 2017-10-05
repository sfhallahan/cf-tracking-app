import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/Nav/Nav'
import { connect } from 'react-redux'

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Nav
          isAuthed={this.props.isAuthed}
          handleLogout={() => console.log('handle logout')} />
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool,
}

function mapStateToProps({users}) {
  return {
    isAuthed: users.isAuthed
  }
}

export default connect(
  mapStateToProps,
)(MainContainer)
