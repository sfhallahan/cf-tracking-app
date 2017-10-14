import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'components'
import { connect } from 'react-redux'

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

function mapStateToProps(state) {
  return {
    isAuthed: state.users.isAuthed,
  }
}

export default connect(
  mapStateToProps,
)(NavContainer)
