import React from 'react'
import styles from './BitacoraCarpeta.module.css'

export function BitacoraCarpeta ({ bitacora, numero, onClick }) {
  function formatHour (dateString) {
    const date = new Date(dateString)
    const options = { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', hour12: true }
    return date.toLocaleTimeString('es-ES', options)
  }

  function formatDate (dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const date = formatDate(bitacora.date)
  const hour = formatHour(bitacora.date)

  return (
    <div className={styles.projectCardContainer}>
      <img className={styles.Line} src='../../../assets/Line.svg' />

      <div className={styles.bitacoraCard}>
        <div className={styles.bitacoraTitle}>
          <h2 className='noMargin'>{numero}</h2>
          <h6 className='noMargin'>{bitacora.title}</h6>
        </div>
        <div className={styles.projectCard} onClick={onClick}>
          <h6 className='noMargin'>Actualizaciones de bitácora</h6>
          <p className='subText'>{date} | {hour}</p>
        </div>
      </div>
    </div>
  )
}
