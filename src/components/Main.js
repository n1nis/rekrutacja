import React from 'react'
import Accommodation from './Accommodation'
import Filtres from './Filtres'
import classes from './Main.module.css'

const Main = () => {
  return (
    <div className={classes.main}>
        <Filtres />
        <Accommodation />
    </div>
  )
}

export default Main