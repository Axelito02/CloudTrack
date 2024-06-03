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
        <h4 className={styles.cardTitle}>{nota.title}</h4>
        <p className={`${styles.breakword} ${styles.truncatedText} smallText`}>{nota.description}</p>
        <div className={styles.tags}>
          {nota.pisos !== '' ? (<p className={styles.tagElement}>Pisos {nota.pisos}</p>) : (null)}
          {nota.torres !== '' ? (<p className={styles.tagElement}>Torres {nota.torres}</p>) : (null)}
          {nota.apartamentos !== '' ? (<p className={styles.tagElement}>Aptos {nota.apartamentos}</p>) : (null)}
        </div>
      </div>
    </div>
  )
}
