import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NewWorkoutPageTwo } from 'components'

class NewWorkoutPageTwoContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      numOfSets: 0,
      sets: [],
    }
  this.handleChange = this.handleChange.bind(this)
  this.handleAddSet = this.handleAddSet.bind(this)
  this.handleRemoveSet = this.handleRemoveSet.bind(this)
  this.handleRemoveSetById = this.handleRemoveSetById.bind(this)
  this.handleUpdateSets = this.handleUpdateSets.bind(this)
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

  handleUpdateSets(setIdToUpdate, field, e) {
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
        numOfSets={this.state.numOfSets}
        sets={this.state.sets}
        handleChange={this.handleChange}
        handleAddSet={this.handleAddSet}
        handleRemoveSet={this.handleRemoveSet}
        handleRemoveSetById={this.handleRemoveSetById}
        handleUpdateSets={this.handleUpdateSets}
      />
    )
  }
}

export default NewWorkoutPageTwoContainer
