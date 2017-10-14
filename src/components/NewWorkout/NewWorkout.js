import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,
        FormControl, InputLabel, Select, MenuItem, Input } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';
import { goals } from 'config/constants'
import { newWorkoutBtn, formContainer, modalContainer,
        progressContainer, progress, progressItem, formControlStyle } from './styles.css'


NewWorkout.propTypes = {
  openNewWorkoutModal: PropTypes.func.isRequired,
  closeNewWorkoutModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
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
            <span className={progressItem}>{'1 Workout Style'}</span>
            <span className={progress}>{'----'}</span>
            <span className={progressItem}>{'2 Workout Details'}</span>
            <span className={progress}>{'----'}</span>
            <span className={progressItem}>{'3 Log Results'}</span>
          </div>
          <DialogContent className={formContainer}>
          <FormControl>
            <InputLabel htmlFor="workoutGoal">Workout goal</InputLabel>
            <Select
              className={formControlStyle}
              value={""}
              onChange={(e) => console.log(e.target.value)}
              input={<Input id="workoutGoal" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {goals.map((goal) => <MenuItem key={goal} value={goal}>{goal}</MenuItem>)}
            </Select>
          </FormControl>
            <TextField
              id="titleText"
              label="Or..."
              margin="normal"
              multiline
              rows="2"
            />
          </DialogContent>
          </div>
          <DialogActions>
            <Button onClick={props.closeNewWorkoutModal} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
}
