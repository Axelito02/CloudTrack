import React, { useState } from 'react'
import styles from './BitacoraCard.module.css' // CSS Modules
import logo from '../../assets/logoGdo.png'

export function BitacoraCard ({ bitacora, bitacoraImage, onDelete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const bitacoraId = bitacora.bitacoraId
  console.log(bitacoraId)
  const imageName = bitacora.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + bitacora.bitacoraId
  console.log(imageName)

  const handleDeleteClick = () => {
    onDelete(bitacoraId, imageName)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setImageError(true)
    console.error('Error al cargar la imagen')
  }
  console.log(bitacoraImage)
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCard}>
        {isLoading && <div className={styles.loader} />} {/* Muestra el loader mientras carga */}

        {imageError
          ? (
            <h1>{bitacora.title}</h1>
            )
          : (
            <>
              <img
                src={bitacoraImage}
                alt={logo}
                style={{ width: '40vw', height: 'auto', display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <h1>{bitacora.title}</h1>
            </>
            )}
        {/* {bitacoraImage && !imageError
          ? (
            <>
              <img
                src={bitacoraImage}
                alt={logo}
                style={{ width: '40vw', height: 'auto', display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <h1>{bitacora.title}</h1>
            </>
            )
          : (
            <h1>{bitacora.title}</h1>
            )} */}

        <p>{bitacora.description}</p>
        <p>{bitacora.writeBinnacle}</p>
        <button className={styles.button} onClick={handleDeleteClick}>
          Borrar
        </button>
      </div>
    </div>
  )
}
