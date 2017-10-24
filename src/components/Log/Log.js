import React from 'react'
import { logContainer } from './styles.css'
import { subHeader } from 'sharedStyles/styles.css'

export default function Log(props) {
  return (
    <div className={logContainer}>
      <h4 className={subHeader}>{'Workout history goes here'}</h4>
    </div>
  )
}
