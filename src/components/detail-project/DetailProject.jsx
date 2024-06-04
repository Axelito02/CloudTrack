import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard } from '../bitacora-card/BitacoraCard'
import { useLastestNote } from '../../../hooks/useLastestNote'
import flecha from '../../../assets/flecha.png'
import flecha2 from '../../../assets/flecha2.png'
import styles from './DetailProject.module.css'
import { useApp } from '../../../hooks/useApp'
import { DateRender } from '../dateInput/DateRender'

const DetailProject = () => {
  const location = useLocation()
  const project = location.state
  const navigate = useNavigate()
  const { setnavState } = useApp() // Usa el hook useApp para acceder al estado del enlace activo

  const handleNavLinkClick = (path) => {
    setnavState(path) // Actualiza el estado del enlace activo
  }
  console.log(project)
  const {
    latestNote
  } = useLastestNote(project.id)

  let statusImage = ''
  let statusText = ''
  let statusClass = ''

  if (project.estado === 0) {
    statusImage = '../../../assets/Clock.svg'
    statusText = 'Pendiente'
    statusClass = styles.pendiente
  } else if (project.estado === 1) {
    statusImage = '../../../assets/Sandclock.svg'
    statusText = 'En progreso'
    statusClass = styles.progreso
  } else if (project.estado === 2) {
    statusImage = '../../../assets/IconCheckFilledColor.svg'
    statusText = 'Completo'
    statusClass = styles.completo
  }

  const [expandedSections, setExpandedSections] = useState({
    pisosPorTorre: false,
    aptosPorPiso: false
  })

  const handleClick = (section) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }))
  }

  // Función para obtener las cantidades según el tipo de construcción
  const getCantidades = () => {
    if (project.tipoConstruccion === 'edificio') {
      return (
        <>
          <p> Torre: {project.numTorres}</p>
          <div className={styles.d1}>
            <button className={styles.btnCantidades} onClick={() => handleClick('pisosPorTorre')}>
              <p> Pisos por torre: {project.numPisos}</p>
              <img src={expandedSections.pisosPorTorre ? flecha2 : flecha} alt='Flecha' className={styles.buttonIcon} />
            </button>
            {expandedSections.pisosPorTorre && <p className={styles.infoDesplegable}>- Total de pisos: {project.numTorres * project.numPisos}</p>}
          </div>
          <div className={styles.d1}>
            <button className={styles.btnCantidades} onClick={() => handleClick('aptosPorPiso')}>
              <p> Apartamentos por pisos: {project.numAptos}</p>
              <img src={expandedSections.aptosPorPiso ? flecha2 : flecha} alt='Flecha' className={styles.buttonIcon} />
            </button>
            {expandedSections.aptosPorPiso && <p className={styles.infoDesplegable}>- Apartamentos por torre: {project.numPisos * project.numAptos}</p>}
            {expandedSections.aptosPorPiso && <p className={styles.infoDesplegable}>- Total de apartamentos:  {(project.numPisos * project.numAptos) * project.numTorres}</p>}
          </div>
        </>
      )
    } else if (project.tipoConstruccion === 'casa') {
      return (
        <>
          <p> Casas por cuadra: {project.numCasas}</p>
          <p> Numero de cuadras: {project.numCuadras}</p>
          <p> Total de casas: {project.numCasas * project.numCuadras}</p>
        </>
      )
    } else {
      return (
        <>
          <p> Numero de construcciones: {project.numConstrucciones}</p>
        </>
      )
    }
  }

  return (
    <div>
      <div className={styles.infomacion}>
        <div className={styles.orangeRectangle}>
          <h4 className={styles.sectionTitle}>Estado construcción</h4>
          <div className={`${styles.icons} ${statusClass}`}>
            <img src={statusImage} alt='Status icon' />
            <p>{statusText}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>Localidad</h4>
          <p>{project.localidad}</p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>Barrio</h4>
          <p>{project.barrio}</p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>Contratista</h4>
          <p>{project.contratista}</p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>Tipo de venta</h4>
          <p>
            {project.tipoVenta === 'soloInterna' && 'Solo interna'}
            {project.tipoVenta === 'soloCargo' && 'Solo cargo'}
            {project.tipoVenta === 'completo' && 'Completo'}
          </p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>Tipo de construcción</h4>
          <p>
            {project.tipoConstruccion === 'edificio' && 'Edificios'}
            {project.tipoConstruccion === 'casa' && 'Casas'}
            {project.tipoConstruccion === 'otro' && `${project.otroTipoConstruccion}`}
          </p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle2}>Cantidades</h4>
          <div className={styles.cantidades}>
            {getCantidades()}
          </div>
        </div>

      </div>

      <div className={styles.flex}>
        <div className={styles.temporalidad}>
          <h3>Temporalidad</h3>
          <p>Período del proyecto</p>
          <div className={styles.periodo}>
            <div className={styles.fechaContainer}>
              <p>Inicio</p>
              <DateRender date={project.date} />
            </div>
            <div className={styles.fechaContainer}>
              <p>Final</p>
              <DateRender date={project.endDate} />
            </div>
          </div>
          <p className={styles.periodoTitle}>Período de tiempo de construcción</p>
          <div className={styles.periodo}>
            <div className={styles.fechaContainer}>
              <p>Inicio</p>
              <DateRender date='' />
            </div>
            <div className={styles.fechaContainer}>
              <p>Final</p>
              <DateRender date='' />
            </div>
          </div>
        </div>
        <div className={styles.bitacora}>
          <h3>Bitácora</h3>
          {latestNote === null
            ? (
              <p>No se pudo encontrar la nota más reciente</p>
              )
            : (
              <BitacoraCard
                key='preview'
                nota={latestNote}
                onClick={() => {
                  handleNavLinkClick('Bitacora')
                  navigate(`/proyectos/${project.title}/bitacora`, { state: project })
                }}
              />
              )}
        </div>
      </div>

    </div>
  )
}

export default DetailProject
