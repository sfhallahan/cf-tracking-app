import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Chip, Avatar, Button } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import * as styles from './styles.css'


function XrmWorkoutDetails(props) {
  const { details } = props
  return (
    <div>
    <div className={styles.titleContainer}>
      <span className={styles.detailsTitle}>
        {`${details.sets[0].rxReps} Rep Max ${details.movement}`}
      </span>
    </div>
    <div className={styles.detailsBody}>
      <span className={styles.result}>{`${details.sets[0].rxReps} ${details.movement}(s) at ${details.sets[0].rxWeight} lbs`}</span>
    </div>
    </div>
  )
}

XrmWorkoutDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  workoutStyle: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
}

function SetsWorkoutDetails(props) {
  const { details } = props
  return (
    <div>
    <div className={styles.titleContainer}>
      <span className={styles.detailsTitle}>
        {`${details.sets[0].rxReps} Rep Max ${details.movement}`}
      </span>
    </div>
    <div className={styles.detailsBody}>
      <ul className={styles.setList}>
        {details.sets.map((set) => (
          <li key={set.setId} className={styles.set}>
            {`${set.rxReps} ${details.movement} at ${set.rxWeight} lbs`}
          </li>
        ))}
      </ul>
      <span className={styles.result}>{`This is the result`}</span>
    </div>
    </div>
  )
}

SetsWorkoutDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  workoutStyle: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
}


function WorkoutDetails (props) {
  const { classes, workoutStyle, details } = props
  return (
    <Paper className={classes.paper}>
    <div>
    {workoutStyle.value === 'XRepMax'
      ? <XrmWorkoutDetails classes={classes} workoutStyle={workoutStyle} details={details} />
      : null}
     {workoutStyle.value === 'sets'
      ? <SetsWorkoutDetails classes={classes} workoutStyle={workoutStyle} details={details} />
      : null}
      <div className={styles.detailsFooter}>
        <div className={styles.tags}>
          <Chip
            avatar={<Avatar className={classes.avatar}>{'Rx'}</Avatar>}
            label='As Perscribed'
            color='accent'
            className={classes.chip} />
          <Chip
            avatar={<Avatar className={classes.avatar}>{'PR'}</Avatar>}
            label='Personal Record'
            color='accent'
            className={classes.chip} />
        </div>
        <Button className={classes.button}>{'View'}</Button>

      </div>
      </div>
    </Paper>
  )}

WorkoutDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  workoutStyle: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
}

const overrideStyles = theme => ({
  chip: {
    margin: '6px',
    fontSize: '10px',
    height: 24,
  },
  paper: {
    padding: '20px',
    flex: '1 1 auto',
    minWidth: '450px',
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
