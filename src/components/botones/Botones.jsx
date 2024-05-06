// import React, { useState } from 'react'
import styles from './Botones.module.css'

export function Botones ({ onClick, titulo, disabled }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        {titulo}
      </button>
    </div>
  )
}
