import React from 'react'
import styles from './BitacoraCard.module.css'

export function BitacoraCard ({ nota, onClick }) {
  function formatDate (dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const date = formatDate(nota.date)

  return (
    <div className={styles.projectCardContainer} onClick={onClick}>
      <div className={styles.projectCard}>
        <div className={styles.flex}>
          {date !== 'Invalid Date'
            ? (
              <p className='subTextLight'>{date}</p>
              )
            : (
              <p className='subTextLight'>Sin fecha asignada</p>
              )}
          <p className={`subTextLight ${styles.textRight}`}>{nota.etapa}</p>
        </div>
        <h4>{nota.title}</h4>
        <p className={`${styles.breakword} ${styles.truncatedText} smallText`}>{nota.description}</p>
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
