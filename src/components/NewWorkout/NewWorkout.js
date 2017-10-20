import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkoutPageOneContainer, NewWorkoutPageTwoContainer, NewWorkoutPageThreeContainer } from 'containers'
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,
        FormControl, InputLabel, Select, MenuItem, Input, List, ListItem, Paper,
        ListItemText } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import {KeyboardArrowRight, KeyboardArrowLeft, Clear } from 'material-ui-icons'
import { goals, workoutStyles } from 'config/constants'
import * as styles from './styles.css'

NewWorkoutProgress.propTypes = {
  newWorkoutStepNumber: PropTypes.number.isRequired,
}

function NewWorkoutProgress({newWorkoutStepNumber}) {
  return (
      <ul className={styles.progressContainer}>
        <li className={styles.step}>
          <div
            className={`${styles.stepNumber}
              ${newWorkoutStepNumber === 1 ? styles.activeStepNumber : null}`}>
            {'1'}
          </div>
          <div className={`${styles.stepText}
            ${newWorkoutStepNumber === 1 ? styles.activeStepText : null}`}>
            {'Workout Style'}
          </div>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.step}>
          <div
            className={`${styles.stepNumber}
              ${newWorkoutStepNumber === 2 ? styles.activeStepNumber : null}`}>
            {'2'}
          </div>
          <div className={`${styles.stepText}
            ${newWorkoutStepNumber === 2 ? styles.activeStepText : null}`}>
            {'Rx workout details'}
          </div>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.step}>
          <div
            className={`${styles.stepNumber}
              ${newWorkoutStepNumber === 3 ? styles.activeStepNumber : null}`}>
            {'3'}
          </div>
          <div className={`${styles.stepText}
            ${newWorkoutStepNumber === 3 ? styles.activeStepText : null}`}>
            {'Log your results'}
          </div>
        </li>
    </ul>
  )
}

NewWorkout.propTypes = {
  openNewWorkoutModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  workoutGoal: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelectWorkout: PropTypes.func.isRequired,
  newWorkoutStepNumber: PropTypes.number.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}

export default function NewWorkout (props) {
    return (
      <div>
        <div className={styles.newWorkoutBtn}>
            <Button
              fab
              color="accent"
              aria-label="add"
              onClick={props.openNewWorkoutModal}>
              <AddIcon />
            </Button>
          </div>
      <Dialog
        open={props.isOpen}
        ignoreBackdropClick
        ignoreEscapeKeyUp
        maxWidth={'md'}
        fullWidth={true}
      >
      <Paper>
        <div className={styles.dialogTitleContainer}>
          <DialogTitle>{`Add New Workout`}</DialogTitle>
          <Button onClick={props.handleModalClose}>
            <Clear/>
          </Button>
        </div>
        <NewWorkoutProgress newWorkoutStepNumber={props.newWorkoutStepNumber} />
      </Paper>

      <DialogContent>
        {props.newWorkoutStepNumber === 1
          ? <NewWorkoutPageOneContainer
              workoutGoal={props.workoutGoal}
              handleChange={props.handleChange}
              handleSelectWorkout={props.handleSelectWorkout}
            />
          : null}
        {props.newWorkoutStepNumber === 2
          ? <NewWorkoutPageTwoContainer
              workoutGoal={props.workoutGoal}
              handleChange={props.handleChange}
            />
          : null}
        {props.newWorkoutStepNumber === 3 ? <NewWorkoutPageThreeContainer /> : null}
      </DialogContent>
        <div className={styles.dialogActionsContainer}>
        <DialogActions>
          <Button
            onClick={() => props.handleBack(props.newWorkoutStepNumber)}
            color="primary"
            disabled={props.newWorkoutStepNumber === 1 ? true : false}>
            <KeyboardArrowLeft color='primary' />
            {' Back '}
          </Button>
          {props.newWorkoutStepNumber !== 3
            ? <Button onClick={() => props.handleNext(props.newWorkoutStepNumber)} color="primary">
                {' Next '}
                <KeyboardArrowRight color='primary'/>
              </Button>
            : <Button raised color='accent' onClick={props.handleModalClose}>
              {'Submit'}
            </Button>
          }
        </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}
