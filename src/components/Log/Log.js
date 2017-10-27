import React from 'react'
import { WorkoutDetails } from 'components'
import { Divider } from 'material-ui'
import { RadioButtonChecked } from 'material-ui-icons'
import * as styles from './styles.css'

export default function Log(props) {
  return (
    <div className={styles.logContainer}>
      <div className={styles.headerContainer}>
        <h5 className={styles.pageHeader}>{'Workout Log'}</h5>
      </div>
      <div className={styles.timelineContainer}>
        <div className={styles.timelineItem}>
          <span className={styles.date}>{'Sep 23'}</span>
          <RadioButtonChecked className={styles.timelineIcon} />
          <WorkoutDetails />
        </div>
        <div className={styles.timelineItem}>
          <span className={styles.date}>{'Sep 23'}</span>
          <RadioButtonChecked className={styles.timelineIcon} />
          <WorkoutDetails />
        </div>
        <div className={styles.timelineItem}>
          <span className={styles.date}>{'Sep 23'}</span>
          <RadioButtonChecked className={styles.timelineIcon} />
          <WorkoutDetails />
        </div>

      </div>
    </div>
  )
}
