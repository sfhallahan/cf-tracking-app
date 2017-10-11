import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Divider, List, ListItem, Typography, Avatar } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { drawerContainer, profileContainer, avatar } from './styles.css'

function Sidebar (props) {
  return (
    <div>
      <Drawer
        type='permanent'
        classes={{ paper: props.classes.drawerPaper }}
        >
        <div className={drawerContainer}>
          <div className={profileContainer}>
            <Avatar
              src='sharedStyles/about-me-pic.jpg'
              alt='SH'
              className={avatar}
            />
            <Typography>{'Sean Hallahan'}</Typography>

          </div>
          <Divider />
          <List>
            <ListItem>{'Workout Log'}</ListItem>
            <ListItem>{'PRs/Perscribed Weight'}</ListItem>
            <ListItem>{'Settings'}</ListItem>
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
