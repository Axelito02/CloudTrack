// import React, { useState } from 'react'
import styles from './Botones.module.css'
import { useNavigate } from 'react-router-dom'

export function ButtonBack () {
  const navigate = useNavigate()
  return (
    <div>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        <img src='../../../../assets/BackButton.svg' />
      </button>
    </div>
  )
}
