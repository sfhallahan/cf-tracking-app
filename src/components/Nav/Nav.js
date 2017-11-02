import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Button } from 'material-ui'
import { Link } from 'react-router-dom'
import { toolBar, navButtons } from './styles.css'

Nav.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

export default function Nav (props) {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={toolBar}>
          <div>
            <Link to='/'>
              <Typography type='title' color='inherit'>
                {'CrossFit Tracking'}
              </Typography>
            </Link>
          </div>
          <div className={navButtons}>
            {props.isAuthed === true
              ? <Link to='/logout'>
                  <Button color="contrast" onClick={() => props.handleLogout()}>Logout</Button>
                </Link>
              : <Link to='/login'>
                  <Button color="contrast">Login</Button>
                </Link>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
