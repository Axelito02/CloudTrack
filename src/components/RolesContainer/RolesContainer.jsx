import React, { useState } from 'react'
import { RolDesignado } from '../RolDesignado/RolDesignado'
import addIcon from '../../../assets/addPerson.svg'
import removeIcon from '../../../assets/removePerson.svg'
import styles from './RolesContainer.module.css'
import data from '../../../assets/profiles' // Importa los datos de data.js

export function RolesContainer ({ onClick, chosenTecnicos, chosenConexiones, chosenRedes, chosenComercial }) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState('')
  console.log(chosenTecnicos)

  const handleShowPopup = (tipo) => {
    setShowPopup(true)
    setPopupType(tipo)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    setPopupType('')
  }

  const renderContent = () => {
    let content
    switch (popupType) {
      case 'Técnicos':
        content = data.tecnicos.filter(filtrarPorNombre)
        break
      case 'Conexiones':
        content = data.conexiones.filter(filtrarPorNombre)
        break
      case 'Redes':
        content = data.redes.filter(filtrarPorNombre)
        break
      case 'Comercial':
        content = data.comercial.filter(filtrarPorNombre)
        break
      default:
        content = []
    }
    content = content.length > 0
      ? (
        <>
          {content.map((persona, index) => (
            <li
              className={`${styles.nameElement} ${isChosen(persona.nombre) && styles.chosen}`}
              key={index}
              onClick={() => onClick(persona, popupType)}
            >
              <img
                className={styles.avatarIcon}
                src={persona.imagen}
                alt={`Avatar ${index + 1}`}
              />
              {persona.nombre}
              <img
                className={styles.addRemove}
                src={isChosen(persona.nombre) ? removeIcon : addIcon}
                alt={isChosen(persona.nombre) ? 'Remove' : 'Add'}
              />
            </li>
          ))}

        </>
        )
      : <p>No se encontró el nombre</p>

    return content
  }

  const isChosen = (persona) => {
    return (
      chosenTecnicos.some(item => item.nombre === persona) ||
      chosenConexiones.some(item => item.nombre === persona) ||
      chosenRedes.some(item => item.nombre === persona) ||
      chosenComercial.some(item => item.nombre === persona)
    )
  }

  // Estado para manejar el valor del filtro por nombre
  const [filtroNombre, setFiltroNombre] = useState('')

  // Función para filtrar notas por nombre
  const filtrarPorNombre = persona => {
    const filtro = filtroNombre.toLowerCase()
    const nombreMatches = persona.nombre.toLowerCase().includes(filtro)
    return nombreMatches
  }

  return (
    <div className={styles.rolesSection}>
      <h5 className={styles.sectionTitle}>Roles Designados</h5>
      <div className={styles.RolesContainer}>
        <div className={styles.RolesContainerInner}>
          <RolDesignado
            titulo='Técnicos' avatarSrc={addIcon} lista={chosenTecnicos}
            onClick={() => handleShowPopup('Técnicos')}
          />
          <div className={styles.line}> </div>
          <RolDesignado
            titulo='Conexiones' avatarSrc={addIcon} lista={chosenConexiones}
            onClick={() => handleShowPopup('Conexiones')}
          />
          <div className={styles.line}> </div>
          <RolDesignado
            titulo='Redes' avatarSrc={addIcon} lista={chosenRedes}
            onClick={() => handleShowPopup('Redes')}
          />
          <div className={styles.line}> </div>
          <RolDesignado
            titulo='Comercial' avatarSrc={addIcon} lista={chosenComercial}
            onClick={() => handleShowPopup('Comercial')}
          />
        </div>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupInner}>
            <h3 className={styles.title}>{popupType}</h3>
            <div className={styles.searchBar}>
              {/* Input para ingresar el nombre a filtrar */}
              <img src='../../../../assets/searchIcon.svg' />
              <input
                className={styles.inputBuscar}
                type='text'
                value={filtroNombre}
                onChange={e => setFiltroNombre(e.target.value)}
                placeholder='Buscar nombre'
              />
            </div>
            <div className={styles.scroll}>

              {renderContent()}
            </div>
            <button className={styles.closeButton} onClick={handleClosePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  )
}
