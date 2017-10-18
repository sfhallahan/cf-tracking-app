import React from 'react'
import PropTypes from 'prop-types'
import { goals, workoutStyles } from 'config/constants'
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,
        FormControl, InputLabel, Select, MenuItem, Input, List, ListItem,
        ListItemText } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';
import { newWorkoutBtn, formContainer, modalContainer, activeStep,
        progressContainer, progress, progressItem, selectStyle, workoutList,
      workoutListContainer, } from './styles.css'


NewWorkoutPageOne.propTypes = {
  workoutGoal: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelectWorkout: PropTypes.func.isRequired,
}

export default function NewWorkoutPageOne (props) {
  return (
    <div className={formContainer}>
      <FormControl fullWidth={false}>
        <InputLabel htmlFor="workoutGoal">Workout goal</InputLabel>
        <Select
          className={selectStyle}
          value={props.workoutGoal}
          onChange={(e) => props.handleChange(e, 'workoutGoal')}
          input={<Input id="workoutGoal" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {goals.map((goal) => <MenuItem key={goal.value} value={goal.value}>{goal.text}</MenuItem>)}
        </Select>
      </FormControl>
      <br />
      <div className={workoutListContainer}>
        <List dense disablePadding className={workoutList}>
          {workoutStyles
              .filter((workout) => {
                return props.workoutGoal === "" || workout.goal === props.workoutGoal
              })
              .map((workout) => (
            <FormControl fullWidth={true} key={workout.value}>
              <ListItem button>
                <ListItemText
                    primary={workout.title}
                    secondary={workout.description}
                    onClick={() => props.handleSelectWorkout(workout)} />
              </ListItem>
            </FormControl>
          ))}
        </List>
      </div>
      </div>
  )
}
