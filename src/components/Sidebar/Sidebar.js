import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import { FitnessCenter, Assessment, Settings } from 'material-ui-icons'
import { drawerContainer, profileContainer, avatar, username } from './styles.css'

function Sidebar (props) {
  return (
    <div>
      <Drawer
        type='permanent'
        classes={{ paper: props.classes.drawerPaper }}
        >
        <div className={drawerContainer}>
          <div className={profileContainer}>
            <img alt={props.userInfo.name} src={props.userInfo.avatar}
            className={avatar} />
            <h4 className={username}>{props.userInfo.name}</h4>
          </div>
          <Divider />
          <List>
            <Link to='/workout-log'>
              <ListItem
                  button
                  classes={props.activeLink === 'workoutLog'
                            ? { root: props.classes.activeLink }
                            : null}>
                <ListItemIcon><FitnessCenter /></ListItemIcon>
                <ListItemText primary='WORKOUT LOG' />
              </ListItem>
            </Link>
            <Link to='/personal-records'>
              <ListItem
                  button
                  classes={props.activeLink === 'personalRecords'
                            ? { root: props.classes.activeLink }
                            : null}>
                <ListItemIcon><Assessment /></ListItemIcon>
                <ListItemText primary={`PR's`} />
              </ListItem>
            </Link>
            <Link to='/settings'>
              <ListItem
                  button
                  classes={props.activeLink === 'settings'
                            ? { root: props.classes.activeLink }
                            : null}>
                <ListItemIcon><Settings /></ListItemIcon>
                <ListItemText primary='SETTINGS' />
              </ListItem>
            </Link>
          </List>
        </div>
        </Drawer>
    </div>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  activeLink: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
}

const styles ={
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  activeLink: {
    borderLeft: 'solid',
    borderWidth: '10px;',
    borderColor: '#ff4081',
  }

}

export default withStyles(styles)(Sidebar)
