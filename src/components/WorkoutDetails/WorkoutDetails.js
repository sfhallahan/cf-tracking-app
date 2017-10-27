import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Chip, Avatar, Button } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import * as styles from './styles.css'

function WorkoutDetails (props) {
  return (
    <Paper className={props.classes.paper}>
      <div className={styles.titleContainer}>
        <span className={styles.detailsTitle}>{'This is the title'}</span>
      </div>
      <div className={styles.detailsBody}>
        <ul className={styles.setList}>
          <li className={styles.set}>{'This is a set that may or may not be long'}</li>
          <li className={styles.set}>{'This is a set that may or may not be long'}</li>
          <li className={styles.set}>{'This is a set that may or may not be long'}</li>
        </ul>
        <span className={styles.result}>{'This is the result '}</span>
      </div>
      <div className={styles.detailsFooter}>
        <div className={styles.tags}>
          <Chip
            avatar={<Avatar className={props.classes.avatar}>{'Rx'}</Avatar>}
            label='As Perscribed'
            color='accent'
            className={props.classes.chip} />
          <Chip
            avatar={<Avatar className={props.classes.avatar}>{'PR'}</Avatar>}
            label='Personal Record'
            color='accent'
            className={props.classes.chip} />
        </div>
        <Button className={props.classes.button}>{'View'}</Button>

      </div>
    </Paper>
  )}

WorkoutDetails.propTypes = {
  classes: PropTypes.object.isRequired,
}

const overrideStyles = theme => ({
  chip: {
    margin: '6px',
    fontSize: '10px',
    height: 24,
  },
  paper: {
    padding: '20px',
    marginBottom: '20px',
    flex: '1 1 auto',
    minWidth: '500px',
  },
  avatar: {
    width: 24,
    height: 24,
    fontSize: 12,
  },
  button: {
    minWidth: 50,
    minHeight: 32,
  }
})

export default withStyles(overrideStyles)(WorkoutDetails)
