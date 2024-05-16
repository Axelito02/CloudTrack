import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, ButtonBack } from '../../components'
import { useNotas } from '../../../hooks/useNotas'
// import { useFilters } from '../../hooks/useFilters';
import styles from './notaDetailPage.module.css'

export function NotaDetailPage () {
  //   const navigate = useNavigate()
  const location = useLocation()
  const { project, bitacora, nota } = location.state
  const projectId = project.id
  const bitacoraId = bitacora.id

  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  // const handleDeleteClick = () => {
  //   onDelete(notaId, imageName)
  // }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setImageError(true)
    console.error('Error al cargar la imagen')
  }

  const {
    imageList
  } = useNotas({ projectId, bitacoraId })

  const tituloImagen = nota.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + nota.notaId
  const notaImage = imageList.find((img) => img.includes(tituloImagen))
  console.log(notaImage)

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
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.header}>
          <ButtonBack />
          <div>
            <h1 className={styles.title}>Bitácora</h1>
            <p className='noMargin'> Proyecto {project.title} - {bitacora.title}</p>
          </div>
        </div>
        <div className={styles.notaContainer}>
          <p className='subTextLight'>{date} | {hour}</p>
          <h3>{nota.title}</h3>
          <p className='smallText'>{nota.description}</p>
          {nota.writeBinnacle !== '' ? (<p>{nota.writeBinnacle}</p>) : (null)}

          {isLoading && <div className='loaderWrapper'><div className='loader' /></div>}
          {imageError
            ? (
                null
              )
            : (
              <img
                src={notaImage}
                alt={nota.title}
                className={styles.cardImage}
                style={{ display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              )}

        </div>
      </section>
    </div>
  )
}
