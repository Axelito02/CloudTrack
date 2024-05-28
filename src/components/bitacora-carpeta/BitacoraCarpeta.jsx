import React from 'react'
import styles from './BitacoraCarpeta.module.css'

export function BitacoraCarpeta ({ bitacora, hasNotes, onClick }) {
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
  const numero = String(bitacora.order + 1).padStart(2, '0')

  const titleColor = hasNotes ? styles.blueText : styles.greyText
  const textColor = hasNotes ? styles.darkText : styles.greyText
  const line = hasNotes ? '../../../assets/Line.svg' : '../../../assets/GreyLine.svg'

  return (
    <div className={styles.projectCardContainer}>
      <img className={styles.Line} src={line} />

      <div className={styles.bitacoraCard}>
        <div className={styles.bitacoraTitle}>
          <h2 className={`noMargin ${titleColor}`}>{numero}</h2>
          <h6 className={`noMargin ${titleColor}`}>{bitacora.title}</h6>
        </div>
        <div className={styles.projectCard} onClick={onClick}>
          <h6 className={`noMargin ${textColor}`}>Actualizaciones de bitácora</h6>
          <p className={`subtext' ${textColor}`}>{date} | {hour}</p>
        </div>
      </div>
    </div>
  )
}
