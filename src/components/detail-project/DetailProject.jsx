import React, { useState } from 'react'
import icono from '../../../assets/SandClock.png'
import flecha from '../../../assets/flecha.png'
import flecha2 from '../../../assets/flecha2.png'
import styles from './DetailProject.module.css'

const DetailProject = ({ project }) => {
  const [expandedSections, setExpandedSections] = useState({
    pisosPorTorre: false,
    aptosPorPiso: false,
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
      )} else if (project.tipoConstruccion === 'casa') {
      return (
        <>
          <p> Casas por cuadra: {project.numCasas}</p>
          <p> Numero de cuadras: {project.numCuadras}</p>
          <p> Total de casas: {project.numCasas * project.numCuadras}</p>
        </>
      )
    } else 
    return (
      <>
        <p> Numero de construcciones: {project.numConstrucciones}</p>
      </>
    )
}

  return (
    <div>
      <div className={styles.infomacion}>
        <div className={styles.orangeRectangle}>
          <h4 className={styles.sectionTitle}>Estado construcción</h4>
          <div className={styles.iconTextContainer}>
            <img src={icono} alt='Sand Clock' className={styles.icon} />
            <p className={styles.text}>En progreso</p>
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
          <p>{project.tipoVenta}</p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>Tipo de construcción</h4>
          <p>{project.tipoConstruccion}</p>
        </div>

        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle2}>Cantidades</h4>
          <div className={styles.cantidades}>
            {getCantidades()}
          </div>
        </div>

      </div>

    </div>
  )
}

export default DetailProject
