import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import { FitnessCenter, Assessment, Settings } from 'material-ui-icons'
import { drawerContainer, profileContainer, avatar, username, active } from './styles.css'

function Sidebar (props) {
  return (
    <div>
      <Drawer
        type='permanent'
        classes={{ paper: props.classes.drawerPaper }}
        >
        <div className={drawerContainer}>
          <div className={profileContainer}>
            <img alt={'sean hallahan'} src={`https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/17202934_10154644410739317_7550417823644438655_n.jpg?oh=363deda206789ffab2742c6bc777f136&oe=5A878A9F`}
            className={avatar} />
            <h4 className={username}>{'SEAN HALLAHAN'}</h4>
          </div>
          <List>
            <Link to='/workout-log'>
              <ListItem button className={props.activeLink === 'workoutLog' ? active : null}>
                <ListItemIcon><FitnessCenter /></ListItemIcon>
                <ListItemText primary='WORKOUT LOG' />
              </ListItem>
            </Link>
            <Link to='/personal-records'>
              <ListItem button>
                <ListItemIcon><Assessment /></ListItemIcon>
                <ListItemText primary={`PR's`} />
              </ListItem>
            </Link>
            <Link to='/settings'>
              <ListItem button>
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
}

const styles ={
  drawerPaper: {
    position: 'relative',
    width: 240,
  }
}

export default withStyles(styles)(Sidebar)
