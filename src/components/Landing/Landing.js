import React from 'react'
import { Button } from 'material-ui'
import { landingContainer, heroText } from './styles.css'

export default function Landing(props) {
  return (
    <div className={landingContainer}>
      <h3 className={heroText}>{'Landing page for app'}</h3>
      <Button
        raised
        color='accent'
        >{'Create account'}</Button>
    </div>
  )
}
