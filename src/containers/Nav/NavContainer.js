import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Nav } from 'components'
import { firebaseAuth } from 'config/constants'
import { formatUserInfo } from 'helpers/utils'
import * as usersActionCreators from 'redux/modules/users'

class NavContainer extends React.Component {

  /**
    * TODO : I put firebase auth listener here since its mounted for the lifecycle of
    * app. May be a better place for it
    *
    */
  componentDidMount () {
    const router = this.context.router.history
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo)
        this.props.authUser(user.uid)
        if (router.location.pathname === '/' || router.location.pathname === '/login') {
          router.replace('/workout-log')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <div>
        <Nav
          isAuthed={this.props.isAuthed}
          handleLogout={this.props.handleLogoutAndUnauth}
        />
      </div>
    )
  }
}

NavContainer.propTypes = {
  isAuthed: PropTypes.bool,
  fetchingUserSuccess: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired,
  removeFetchingUser: PropTypes.func.isRequired,
  handleLogoutAndUnauth: PropTypes.func.isRequired,
}

NavContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthed: state.users.isAuthed,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavContainer)
