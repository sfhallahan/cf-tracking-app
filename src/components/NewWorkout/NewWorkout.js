import React from 'react'
import PropTypes from 'prop-types'
import { NewWorkoutPageOneContainer, NewWorkoutPageTwoContainer, NewWorkoutPageThreeContainer } from 'containers'
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,
        FormControl, InputLabel, Select, MenuItem, Input, List, ListItem,
        ListItemText } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';
import { goals, workoutStyles } from 'config/constants'
import { newWorkoutBtn, formContainer, modalContainer, activeStep,
        progressContainer, progress, progressItem, selectStyle, workoutList,
      workoutListContainer, } from './styles.css'

NewWorkoutProgress.propTypes = {
  newWorkoutStepNumber: PropTypes.number.isRequired,
}

function NewWorkoutProgress({newWorkoutStepNumber}) {
  return (
    <div>
      <span
        className={progressItem, newWorkoutStepNumber === 1 ? activeStep : null}
      >{'1 Workout Style'}</span>
      <span className={progress}>{'----'}</span>
      <span
        className={progressItem, newWorkoutStepNumber === 2 ? activeStep : null}
      >{'2 Workout Details'}</span>
      <span className={progress}>{'----'}</span>
      <span
        className={progressItem, newWorkoutStepNumber === 3 ? activeStep : null}
      >{'3 Log Results'}</span>
    </div>
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
}

export default function NewWorkout (props) {
    return props.isOpen === false
      ? <div className={newWorkoutBtn}>
          <Button
            fab
            color="accent"
            aria-label="add"
            onClick={props.openNewWorkoutModal}>
            <AddIcon />
          </Button>
        </div>
      : <Dialog
          open={props.isOpen}
          ignoreBackdropClick
          ignoreEscapeKeyUp
        >
          <DialogTitle>{`Add New Workout`}</DialogTitle>
          <div>
            <div className={progressContainer}>
              <NewWorkoutProgress newWorkoutStepNumber={props.newWorkoutStepNumber} />
            </div>
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
          </div>
          <DialogActions>
            <Button onClick={props.handleModalClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
}
