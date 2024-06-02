import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Navbar, ButtonBack } from '../../components'
import { useNotas } from '../../../hooks/useNotas'
import { useUploadForm } from '../../../hooks/useUploadForm'
import styles from './notaDetailPage.module.css'

export function NotaDetailPage () {
  const navigate = useNavigate()
  const location = useLocation()
  const { project, bitacora, nota } = location.state
  const projectId = project.id
  const bitacoraId = bitacora.id
  const notaId = nota.notaId

  const {
    imageList,
    firmaList
  } = useNotas({ projectId, bitacoraId })

  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [firmaError, setFirmaError] = useState(false)

  const tituloImagen = nota.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + nota.notaId
  const notaImage = imageList.find((img) => img.includes(tituloImagen))

  const firmaImagen = 'Firma' + nota.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + nota.notaId
  const notaFirma = firmaList.find((img) => img.includes(firmaImagen))

  const {
    handleErase
  } = useUploadForm(projectId, bitacoraId)

  const handleDeleteClick = () => {
    handleErase(projectId, bitacoraId, notaId, notaImage, notaFirma)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setImageError(true)
    console.error('Error al cargar la imagen')
  }

  const handleFirmaError = () => {
    setIsLoading(false)
    setFirmaError(true)
    console.error('Error al cargar la firma')
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

  const date = formatDate(nota.date)
  const hour = formatHour(nota.date)

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.header}>
          <ButtonBack onClick={() => navigate(-1)} />
          <div>
            <h1 className={styles.title}>Bitácora</h1>
            <p className='noMargin'> Proyecto {project.title} - {bitacora.title}</p>
          </div>
        </div>
        <div className={styles.notaContainer}>
          <div className={styles.containerTopPart}>
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
            <div>
              <img onClick={handleDeleteClick} className={styles.icon} src='../../../../assets/trashBtn.svg' />
              <img className={styles.icon} src='../../../../assets/EditIcon3.svg' />
            </div>
          </div>
          <p className={`${styles.title} smallText`}>{nota.etapa}</p>
          <h3 className={styles.title}>{nota.title}</h3>
          <p className='smallText'>{nota.description}</p>

          {nota.writeBinnacle !== ''
            ? (
              <p className={styles.Binnacle}>{nota.writeBinnacle}</p>
              )
            : (
                null
              )}

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

          {firmaError
            ? (
                null
              )
            : (
              <>
                <p>Foto de firma adjunta:</p>
                <img
                  src={notaFirma}
                  alt={nota.title}
                  className={styles.cardSign}
                  style={{ display: isLoading ? 'none' : 'block' }}
                  onLoad={handleImageLoad}
                  onError={handleFirmaError}
                />
              </>
              )}
          {nota.materials !== '' ? (<p>• {nota.materials}</p>) : (null)}
          {nota.process !== '' ? (<p>• {nota.process}</p>) : (null)}
          {nota.planos !== '' ? (<p>• {nota.planos}</p>) : (null)}

          <div className={styles.tags}>
            {nota.pisos === true ? (<p className={styles.tagElement}>Pisos</p>) : (null)}
            {nota.torres === true ? (<p className={styles.tagElement}>Torres</p>) : (null)}
            {nota.apartamentos === true ? (<p className={styles.tagElement}>Apartamentos</p>) : (null)}
            {nota.otros === true ? (<p className={styles.tagElement}>Otros</p>) : (null)}
          </div>
        </div>
      </section>
    </div>
  )
}
