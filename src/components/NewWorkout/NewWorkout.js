import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkoutPageOneContainer, NewWorkoutPageTwoContainer, NewWorkoutPageThreeContainer } from 'containers'
import NewWorkoutProgress from './NewWorkoutProgress'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import {KeyboardArrowRight, KeyboardArrowLeft, Clear } from 'material-ui-icons'
import * as styles from './styles.css'

NewWorkout.propTypes = {
  openNewWorkoutModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  workoutGoal: PropTypes.string.isRequired,
  workoutStyle: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelectWorkout: PropTypes.func.isRequired,
  stepNumber: PropTypes.number.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  handleUpdateSet: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
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
        maxWidth={'sm'}
        fullWidth={true}
      >
      <Paper>
        <div className={styles.dialogTitleContainer}>
          <DialogTitle>{`Add New Workout`}</DialogTitle>
          <Button onClick={props.handleModalClose}>
            <Clear/>
          </Button>
        </div>
        <NewWorkoutProgress stepNumber={props.stepNumber} />
      </Paper>

      <DialogContent>
        {props.stepNumber === 1
          ? <NewWorkoutPageOneContainer
              workoutGoal={props.workoutGoal}
              handleChange={props.handleChange}
              handleSelectWorkout={props.handleSelectWorkout}
              workoutStyle={props.workoutStyle}
            />
          : null}
        {props.stepNumber === 2
          ? <NewWorkoutPageTwoContainer
              workoutStyle={props.workoutStyle}
              workoutGoal={props.workoutGoal}
              handleChange={props.handleChange}
              handlePage2Next={props.handlePage2Next}
              details={props.details}
            />
          : null}
        {props.stepNumber === 3
          ? <NewWorkoutPageThreeContainer
              workoutStyle={props.workoutStyle}
              details={props.details}
              handleUpdateSet={props.handleUpdateSet}
              handleChange={props.handleChange}
              date={props.date} />
          : null}
      </DialogContent>
        <div className={styles.dialogActionsContainer}>
        <DialogActions>
          <Button
            onClick={() => props.handleBack(props.stepNumber)}
            color="primary"
            disabled={props.stepNumber === 1 ? true : false}>
            <KeyboardArrowLeft color='primary' />
            {' Back '}
          </Button>
          {props.stepNumber !== 3
            ? <Button onClick={() => props.handleNext(props.stepNumber)} color="primary">
                {' Next '}
                <KeyboardArrowRight color='primary'/>
              </Button>
            : <Button raised color='accent' onClick={() => props.handleSubmit()}>
              {'Submit'}
            </Button>
          }
        </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}
