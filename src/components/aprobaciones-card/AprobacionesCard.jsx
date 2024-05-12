import React from 'react'
import styles from './AprobacionesCard.module.css' // CSS Modules
import logo from '../../../assets/logo.png'

export function AprobacionesCard ({ aprobacion, onDelete }) {
  function formatHour (dateString) {
    const date = new Date(dateString)
    const options = { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', hour12: true }
    return date.toLocaleTimeString('es-ES', options)
  }

  function formatDate (dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const date = formatDate(aprobacion.date)
  const hour = formatHour(aprobacion.date)

  return (
    <div className={styles.aprobacionesCardContainer}>
      <div className={styles.imageContainer}>
        <img src={logo} alt='Logo' className={styles.cardImage} />
      </div>
      <div className={styles.approvalCheck} />
      <label className={styles.approvalCheck}>
        <input type='checkbox' />
      </label>
      <div className={styles.aprobacionesCard}>
        <div className={styles.firstPart} />

        <div className={styles.secondPart}>
          <p className='smallText'>{aprobacion.title}</p>
          <p className='subTextLight'>Creada {date}, a las {hour}</p>
        </div>

        <div className={styles.thirdPart}>
          <u className='subText'>Ver detalle</u>
        </div>
        <div className={styles.editIcon}>
          {/* el lapiz... */}
        </div>
      </div>
    </div>
  )
}
