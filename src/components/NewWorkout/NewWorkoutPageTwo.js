import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Typography, Button } from 'material-ui'
import { movementContainer, dialogContentContainer } from './styles.css'

Set.propTypes = {
  handleUpdateSets: PropTypes.func.isRequired,
  rxRepCount: PropTypes.string.isRequired,
}

function Set (props) {
  return (
    <div className={movementContainer}>
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

NewWorkoutPageTwo.propTypes = {
  numOfSets: PropTypes.number.isRequired,
  sets: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddSet: PropTypes.func.isRequired,
  handleRemoveSet: PropTypes.func.isRequired,
  handleRemoveSetById: PropTypes.func.isRequired,
  handleUpdateSets: PropTypes.func.isRequired,

}

export default function NewWorkoutPageTwo (props) {
  console.log(props)
  return (
    <div className={dialogContentContainer}>
    <TextField
      id='movementName'
      label={'Movement'}
      margin="normal" />
    <div className={movementContainer}>
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
