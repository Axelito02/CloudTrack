import React, { useState } from 'react'
import styles from './BitacoraCard.module.css' // CSS Modules
// import { Botones } from '../botones/Botones'
import logo from '../../../assets/logo.png'

export function BitacoraCard ({ bitacora, bitacoraImage, onDelete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  // const bitacoraId = bitacora.bitacoraId
  // const imageName = bitacora.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + bitacora.bitacoraId

  // const handleDeleteClick = () => {
  //   onDelete(bitacoraId, imageName)
  // }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setImageError(true)
    console.error('Error al cargar la imagen')
  }

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
      <div className={styles.projectCard}>
        {isLoading && <div className={styles.loaderWrapper}><div className={styles.loader} /></div>} {/* Muestra el loader mientras carga */}

        {imageError
          ? (
            <h4 className={styles.Center}>{bitacora.title}</h4>
            )
          : (
            <>
              <img
                src={bitacoraImage}
                alt={logo}
                className={styles.cardImage}
                style={{ display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <h4 className={styles.Center}>{bitacora.title}</h4>
            </>
            )}

        <p className='subText'>{date} {hour}</p>
        <p className='smallText'>{bitacora.description}</p>
        <p>{bitacora.writeBinnacle}</p>
        {/* <Botones onClick={handleDeleteClick} titulo='Borrar' /> */}
      </div>
    </div>
  )
}
