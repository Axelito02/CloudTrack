// import React, { useState } from 'react'
import styles from './Botones.module.css'

export function ButtonBack ({ onClick }) {
  return (
    <div>
      <button className={styles.buttonBack} onClick={onClick}>
        <img src='../../../../assets/BackButton.svg' />
      </button>
    </div>
  )
}
