// import React, { useState } from 'react'
import styles from './RolCard.module.css'

export function RolCard ({ nombre, imagen }) {
  return (
    <div className={styles.RolCard}>
      <img src={imagen} alt={nombre} />
      <p>{nombre}</p>
    </div>
  )
}
