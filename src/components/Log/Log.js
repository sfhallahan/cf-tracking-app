import React from 'react'
import PropTypes from 'prop-types'
import { WorkoutDetails } from 'components'
import { CircularProgress } from 'material-ui'
import { RadioButtonChecked } from 'material-ui-icons'
import { withStyles } from 'material-ui/styles'
import { formatTimelineDate } from 'helpers/utils'
import * as styles from './styles.css'


function TimelineItem(props) {
  return (
    <div className={styles.timelineItem}>
      <span className={styles.itemDate}>{formatTimelineDate(props.workout.date)}</span>
      <div className={styles.itemIcon}>
        <RadioButtonChecked className={props.classes.icon} />
      </div>
      <div className={styles.itemContent}>
        <WorkoutDetails
          workoutStyle={props.workout.workoutStyle}
          details={props.workout.details} />
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  classes: PropTypes.object.isRequired,
  workout: PropTypes.object.isRequired,
}

function Log(props) {
  return (
    <div className={styles.logContainer}>
      <div className={styles.headerContainer}>
        <h5 className={styles.pageHeader}>{'Workout Log'}</h5>
      </div>
      <div className={styles.timelineContainer}>
        {props.isFetching
          ? <CircularProgress color="accent" />
          : Object.keys(props.workouts).reverse().map((key) => ( // Update this to use sorted Ids from listener
            <TimelineItem
              key={key}
              classes={props.classes}
              workout={props.workouts[key]} />))
        }
      </div>
    </div>
  )
}

Log.propTypes = {
  classes: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  workouts: PropTypes.object.isRequired,
}

// Material-ui style overrides
const overrideStyles = theme => ({
  icon: {
    width: '36px',
    height: '36px',
    color: theme.palette.secondary['A200'],
  },
})


export default withStyles(overrideStyles)(Log)
