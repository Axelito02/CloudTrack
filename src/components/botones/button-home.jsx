import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Botones.module.css'

export function Buttonshome ({ to, titulo, disabled }) {
  return (
    <div>
      <Link to={to} className={styles.homeButton} disabled={disabled}>
        {titulo}
      </Link>
    </div>
  )
}
