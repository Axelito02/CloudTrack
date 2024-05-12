import React from 'react'
import styles from './AprobacionesCard.module.css' // CSS Modules
// import { Botones } from '../botones/Botones'
import logo from '../../../assets/logo.png'

export function AprobacionesCard ({ aprobacion, onDelete }) {
//   const [isLoading, setIsLoading] = useState(true)

  // const bitacoraId = bitacora.bitacoraId
  // const imageName = bitacora.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + bitacora.bitacoraId

  // const handleDeleteClick = () => {
  //   onDelete(bitacoraId, imageName)
  // }

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
      <div className={styles.aprobacionesCard}>
        <div className={styles.firstPart}>
          <img src={logo} />
          <div className={styles.checkboxWrapper}>
            <div className={styles.round}>
              <input type='checkbox' />
            </div>
          </div>
        </div>

        <div className={styles.secondPart}>
          <p className='smallText'>{aprobacion.title}</p>
          <p className='subTextLight'>Creada {date}, a las {hour}</p>
        </div>

        <div className={styles.thirdPart}>
          <u className='subText'>Ver detalle</u>
        </div>
      </div>
    </div>
  )
}
