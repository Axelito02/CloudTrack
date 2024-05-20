// import React, { useState } from 'react'
import styles from './Botones.module.css'

export function AddButtonBig ({ onClick }) {
  return (
    <div>
      <button className={styles.addButtonBig} onClick={onClick}>
        <img class='icon' src='../../../../assets/plusIcon.svg' alt='Icon' />
        Añadir nueva nota
      </button>
    </div>
  )
}
