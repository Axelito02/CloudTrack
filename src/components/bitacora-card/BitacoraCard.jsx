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
        {date !== 'Invalid Date'
          ? (
              hour !== 'Invalid Date'
                ? (
                  <p className='subTextLight'>{date} | {hour}</p>
                  )
                : (
                  <p className='subTextLight'>{date}</p>
                  )
            )
          : (
            <p className='subTextLight'>Sin fecha asignada</p>
            )}
        <h4>{nota.title}</h4>
        <p className={`${styles.breakword} smallText`}>{nota.description}</p>
        <div className={styles.tags}>
          {nota.pisos === true ? (<p className={styles.tagElement}>Pisos</p>) : (null)}
          {nota.torres === true ? (<p className={styles.tagElement}>Torres</p>) : (null)}
          {nota.apartamentos === true ? (<p className={styles.tagElement}>Aptos</p>) : (null)}
          {nota.otros === true ? (<p className={styles.tagElement}>Otros</p>) : (null)}
        </div>
      </div>
    </div>
  )
}
