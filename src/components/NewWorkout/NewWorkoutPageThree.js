import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { TextField, MenuItem, CircularProgress } from 'material-ui'
import { weightUnits } from 'config/constants'
import * as styles from './styles.css'

const XRM_WORKOUT = 'XRepMax'

NewWorkoutPageThree.propTypes = {
  workoutStyle: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  handleUpdateSet: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,

}

function NewWorkoutPageThree (props) {
  switch (props.workoutStyle.value) {
    case XRM_WORKOUT:
      return (
        <XrmWorkout
          workoutStyle={props.workoutStyle}
          classes={props.classes}
          details={props.details}
          handleUpdateSet={props.handleUpdateSet}
          handleChange={props.handleChange}
          date={props.date} />
      )
    default:
      return <p>{'Workout not built yet'}</p>

  }
}

XrmWorkout.propTypes = {
  workoutStyle: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  handleUpdateSet: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
}

function XrmWorkout(props) {
  const classes = props.classes;

  return Object.keys(props.details).length === 0
    ? <CircularProgress size={50} color='accent' />
    : <div className={styles.dialogContentContainer}>
        <div className={styles.workoutTitleContainer}>
          <h4 className={styles.header}>{`${props.workoutStyle.title} - ${props.details.movement}`}</h4>
          <p className={styles.subHeader}>{props.workoutStyle.description}</p>
        </div>
        <TextField
          id="date"
          label="Date performed"
          type="datetime-local"
          defaultValue={props.date}
          onChange={(e) => props.handleChange('date', e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={styles.recordResultRow}>
        <p className={styles.resultText}>{`${props.details.sets[0].rxReps} Rep(s) at `}</p>
        <TextField
          id='weight'
          label={'Weight'}
          margin="normal"
          value={props.details.sets[0].rxWeight}
          onChange={(e) => props.handleUpdateSet('rxWeight', e)}
          className={classes.textField} />
        <TextField
          id="unit"
          select
          label="Units"
          value={'lbs'}
          margin="normal"
          className={classes.selectField}
          >
          {weightUnits.map((unit) => <MenuItem key={unit} value={unit}>{unit}</MenuItem>)}
          </TextField>
        </div>
        <br />
        <TextField
          id='Notes'
          label='Additional Notes'
          multiline
          rows="3"
          className={classes.textArea}
          placeholder={'i.e. felt good, almost had 1 more rep at 250 lbs'} />
      </div>

}

const overrideStyles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
  textArea: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  selectField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 90,
  },
})

export default withStyles(overrideStyles)(NewWorkoutPageThree)
