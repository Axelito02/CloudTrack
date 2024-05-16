import React from 'react'
import styles from './BitacoraCard.module.css'

export function BitacoraCard ({ nota, onClick, notaImage, onDelete }) {
  function formatHour (dateString) {
    const date = new Date(dateString)
    const options = { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', hour12: true }
    return date.toLocaleTimeString('es-ES', options)
  }

  function formatDate (dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const date = formatDate(nota.date)
  const hour = formatHour(nota.date)

  return (
    <div className={styles.projectCardContainer} onClick={onClick}>
      <div className={styles.projectCard}>
        <p className='subTextLight'>{date} | {hour}</p>
        <h4>{nota.title}</h4>
        <p className='smallText'>{nota.description}</p>
      </div>
    </div>
  )
}
