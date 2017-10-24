import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'material-ui'
import * as styles from './styles.css'

const XRM_WORKOUT = 'XRepMax'

NewWorkoutPageTwo.propTypes = {
  workoutStyle: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  sets: PropTypes.array.isRequired,
  handleAddSet: PropTypes.func.isRequired,
  handleUpdateSet: PropTypes.func.isRequired,
  /*
  numOfSets: PropTypes.number.isRequired,
  handleRemoveSet: PropTypes.func.isRequired,
  handleRemoveSetById: PropTypes.func.isRequired,
  */

}

export default function NewWorkoutPageTwo (props) {
  switch (props.workoutStyle.value) {
    case XRM_WORKOUT:
      return (
        <XrmWorkout
          workoutStyle={props.workoutStyle}
          sets={props.sets}
          handleChange={props.handleChange}
          handleAddSet={props.handleAddSet}
          handleUpdateSet={props.handleUpdateSet}
          movement={props.movement}
           />
      )
    default:
      return <p>{'Workout not built yet'}</p>

  }
}


class XrmWorkout extends React.Component {
  componentDidMount() {
    if( this.props.sets.length === 0) {
      this.props.handleAddSet()
    }
  }

  render() {
    return (
      <div className={styles.dialogContentContainer}>
        <div className={styles.workoutTitleContainer}>
          <h4 className={styles.header}>{`${this.props.workoutStyle.title} Workout`}</h4>
          <p className={styles.subHeader}>{this.props.workoutStyle.description}</p>
        </div>
        <TextField
          id='movementName'
          label={'Movement'}
          margin="normal"
          value={this.props.movement}
          onChange={(e) => this.props.handleChange('movement', e)}
          />
        <TextField
          id='rxReps'
          label={'# of Reps'}
          margin="normal"
          value={this.props.sets.length > 0 ? this.props.sets[0].rxReps : ''}
          onChange={(e) => this.props.handleUpdateSet(this.props.sets[0].setId, 'rxReps', e)}
         />
      </div>
    )
  }
}

XrmWorkout.propTypes = {
  workoutStyle: PropTypes.object.isRequired,
  sets: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddSet: PropTypes.func.isRequired,
  handleUpdateSet: PropTypes.func.isRequired,
}


/**
  * putting these aside until add sets workout is built out
  *
function SetsWorkout(props) {
  return (
    <div className={styles.dialogContentContainer}>
    <TextField
      id='movementName'
      label={'Movement'}
      margin="normal" />
    <div className={styles.movementContainer}>
      <Typography>{`${props.numOfSets} set(s) `}</Typography>
      <Button
        onClick={() => props.handleAddSet()}
        raised
      >{' + '}</Button>
      <Button
        onClick={() => props.handleRemoveSet()}
        raised
      >{' - '}</Button>
      </div>
      <div>
      {props.sets.map((set) => (
        <Set
          key={set.setId}
          id={set.setId}
          rxRepCount={set.rxRepCount}
          rxWeight={set.rxWeight}
          handleUpdateSets={props.handleUpdateSets}/>
      ))}
      </div>
    </div>
  )
}

Set.propTypes = {
  handleUpdateSets: PropTypes.func.isRequired,
  rxRepCount: PropTypes.string.isRequired,
}

function Set (props) {
  return (
    <div className={styles.movementContainer}>
      <TextField
          id='reps'
          value={props.rxRepCount}
          onChange={(e) => props.handleUpdateSets(props.id, 'rxRepCount', e)}
          type="number"
          placeholder={'Number of Reps'}
          margin="normal"/>
      <Typography>{` Reps at  `}</Typography>
      <TextField
        id='reps'
        //value={props.rxWeight}
        onChange={(e) => console.log('rx weight: ', e)}
        placeholder={'Weight'}
        margin="normal"/>
      <Typography>{` lbs`}</Typography>
    </div>
  )
}
*
**/
