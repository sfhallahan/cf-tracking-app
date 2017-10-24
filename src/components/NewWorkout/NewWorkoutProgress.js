import React from 'react'
import PropTypes from 'prop-types'
import { Done } from 'material-ui-icons'
import * as styles from './styles.css'


NewWorkoutProgress.propTypes = {
  stepNumber: PropTypes.number.isRequired,
}

export default function NewWorkoutProgress({stepNumber}) {
  return (
      <ul className={styles.progressContainer}>
        <li className={styles.step}>
          <div
            className={`${styles.stepNumber} ${styles.activeStepNumber}`}>
            {stepNumber > 1 ? <Done /> : '1'}
          </div>
          <div className={`${styles.stepText}
            ${stepNumber === 1 ? styles.activeStepText : null}
            ${stepNumber > 1 ? styles.completedStepText : null}`}>
            {'Workout Style'}
          </div>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.step}>
          <div
            className={`${styles.stepNumber}
              ${stepNumber >= 2 ? styles.activeStepNumber : null}`}>
            {stepNumber > 2 ? <Done /> : '2'}
          </div>
          <div className={`${styles.stepText}
            ${stepNumber === 2 ? styles.activeStepText : null}
            ${stepNumber > 2 ? styles.completedStepText : null}`}>
            {'Rx workout details'}
          </div>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.step}>
          <div
            className={`${styles.stepNumber}
              ${stepNumber === 3 ? styles.activeStepNumber : null}`}>
            {'3'}
          </div>
          <div className={`${styles.stepText}
            ${stepNumber === 3 ? styles.activeStepText : null}`}>
            {'Log your results'}
          </div>
        </li>
    </ul>
  )
}
