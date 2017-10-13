import React from 'react'
import { logContainer } from './styles.css'

export default function Log(props) {
  return (
    <div className={logContainer}>
      <p>{'This new workspace is coo'}</p>
      <p>{'Hell yeah it is... Definitely going to take some getting used to'}</p>
      <h4>{'I think it will really just be the keyboard'}</h4>
    </div>
  )
}
