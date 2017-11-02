import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { NewWorkoutPageTwo } from 'components'

class NewWorkoutPageTwoContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movement: props.details.movement || '',
      numOfSets: props.details.numOfSets || 0,
      sets: props.details.sets || [],
    }
  this.handleChange = this.handleChange.bind(this)
  this.handleAddSet = this.handleAddSet.bind(this)
  this.handleUpdateSet = this.handleUpdateSet.bind(this)
  }

  componentWillUnmount() {
    this.props.handlePage2Next(
      this.state.movement,
      this.state.numOfSets,
      this.state.sets)
  }

  handleChange(name, e) {
    this.setState({
      [name]: e.target.value,
    })
  }

  handleAddSet() {
    const updatedNumOfSets = this.state.numOfSets + 1
    const setId = uuidv4()
    const newSet = {
      setId,
      rxReps: '',
      rxWeight: '',
    }
    this.setState(() => {
      return {
        numOfSets: updatedNumOfSets,
        sets: [...this.state.sets, newSet],
      }
    })
  }

  handleUpdateSet(setIdToUpdate, field, e) {
    const updatedSets = [...this.state.sets]
    for (let i in updatedSets ) {
      if (updatedSets[i].setId === setIdToUpdate) {
        updatedSets[i][field] = e.target.value
        break
      }
    }
    this.setState(() => {
      return {
        sets: updatedSets,
      }
    })
  }


  render () {
    return (
      <NewWorkoutPageTwo
        workoutStyle={this.props.workoutStyle}
        movement={this.state.movement}
        sets={this.state.sets}
        handleChange={this.handleChange}
        handleAddSet={this.handleAddSet}
        handleUpdateSet={this.handleUpdateSet}
      />
    )
  }
}

NewWorkoutPageTwoContainer.propTypes = {
  workoutStyle: PropTypes.object.isRequired,
  handlePage2Next: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
}

export default NewWorkoutPageTwoContainer




/**
  * Putting these methods aside until the add sets workout functionality is in place
  *

  *
  * propTypes
  *
  handleRemoveSet={this.handleRemoveSet}
  handleRemoveSetById={this.handleRemoveSetById}

  numOfSets={this.state.numOfSets}
  sets={this.state.sets}

  *
  * constructor args
  *
  this.handleRemoveSet = this.handleRemoveSet.bind(this)
  this.handleRemoveSetById = this.handleRemoveSetById.bind(this)
  this.handleUpdateSets = this.handleUpdateSets.bind(this)

  *
  * methods
  *


handleRemoveSet(setIdToRemove) {
  if ( this.state.numOfSets === 0 ) {
    return
  }
  const updatedNumOfSets = this.state.numOfSets - 1
  const updatedSets = [...this.state.sets]

  updatedSets.pop()
  this.setState(() => {
    return {
      numOfSets: updatedNumOfSets,
      sets: updatedSets,
    }
  })
}

handleRemoveSetById(setIdToRemove) {
  if ( this.state.numOfSets === 0 ) {
    return
  }

  const updatedNumOfSets = this.state.numOfSets - 1
  const updatedSets = this.states.ets.filter((set) => {
    return set.setId !== setIdToRemove
  })
  this.setState(() => {
    return {
      numOfSets: updatedNumOfSets,
      sets: updatedSets,
    }
  })
}

*/
