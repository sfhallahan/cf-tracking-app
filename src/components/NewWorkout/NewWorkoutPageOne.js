import React from 'react'
import PropTypes from 'prop-types'
import { goals, workoutStyles } from 'config/constants'
import { FormControl, InputLabel, Select, MenuItem, Input, List, ListItem,
        ListItemText, ListItemSecondaryAction } from 'material-ui'
import CheckCircle from 'material-ui-icons/CheckCircle'
import * as styles from './styles.css'


NewWorkoutPageOne.propTypes = {
  workoutGoal: PropTypes.string.isRequired,
  workoutStyle: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelectWorkout: PropTypes.func.isRequired,
}

export default function NewWorkoutPageOne (props) {
  return (
    <div className={styles.dialogContentContainer}>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="workoutGoal">{'Filter by workout goal'}</InputLabel>
        <Select
          value={props.workoutGoal}
          onChange={(e) => props.handleChange('workoutGoal', e)}
          input={<Input id="workoutGoal" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {goals.map((goal) => <MenuItem key={goal.value} value={goal.value}>{goal.text}</MenuItem>)}
        </Select>
      </FormControl>
      <br />
      <div className={styles.workoutListContainer}>
        <List dense disablePadding={true} className={styles.workoutList}>
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
              {workout.value === props.workoutStyle.value
                ? <ListItemSecondaryAction>
                    <CheckCircle className={styles.check}/>
                  </ListItemSecondaryAction>
              : null}
              </ListItem>
            </FormControl>
          ))}
        </List>
      </div>
      </div>
  )
}
