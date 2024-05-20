// import React, { useState } from 'react'
import styles from './Botones.module.css'

export function AddButtonSmall ({ onClick, titulo, icon }) {
  return (
    <div>
      <button className={styles.addButtonSmall} onClick={onClick}>
        <img class='icon' src={icon} alt='Icon' />
        {titulo}
      </button>
    </div>
  )
}
