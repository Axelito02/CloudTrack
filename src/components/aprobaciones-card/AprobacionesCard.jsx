import React, { useState } from 'react'
import Swal from 'sweetalert2'
import styles from './AprobacionesCard.module.css' // CSS Modules
// import logo from '../../../assets/logo.png'

export function AprobacionesCard ({ aprobacion, onDelete }) {
  const [isChecked, setIsChecked] = useState(aprobacion.checked)

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

  const handleViewDetail = () => {
    Swal.fire({
      html: `
      <div style='text-align: left; padding:20px'>
        <div style='display:flex; align-items:center; gap:1vw'>
          <img style='width:10vh; height:10vh' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzCpWFudzdS4vJwzfCyIgrX7FCeLPPBzGJJPzlC70_g&s' alt='Logo'></img>
          <div>
            <p style='margin:0' class='subText'>${aprobacion.rol}</p>
            <p style='margin:0' class='subTextLight'>${aprobacion.user}</p>
          </div>
        </div>
        <i>${aprobacion.title}</i>
        <p class='smallText'>${aprobacion.description}</p>
        <p class='subTextLight'>${date} a las ${hour}</p>
      </div>
      `,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar'
    })
  }

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  return (
    <div className={styles.aprobacionesCardContainer}>
      <div className={styles.aprobacionesCard}>
        <div className={styles.firstPart}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzCpWFudzdS4vJwzfCyIgrX7FCeLPPBzGJJPzlC70_g&s' alt='Logo' className={styles.cardImage} />
          <input
            checked={isChecked}
            className={styles.approvalCheck}
            id='aprovado'
            type='checkbox'
            onChange={handleCheckboxChange}
          />
        </div>

        <div className={styles.secondPart}>
          <i>{aprobacion.title}</i>
          {isChecked
            ? (
              <p className='subTextLight'><span className={styles.greenText}>Aprobada</span> el {date}, a las {hour}</p>
              )
            : (
              <p className='subTextLight'>Creada {date}, a las {hour}</p>
              )}
        </div>

        <div className={styles.thirdPart}>
          <u className={`${styles.cursor} subText`} onClick={handleViewDetail}>Ver detalle</u>
          <div className={styles.editIcon}>
            <img src='../../../assets/EditIcon.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}
