import React, { useState } from 'react'
import styles from './ProjectCard.module.css' // CSS Modules
import logo from '../../assets/logoGdo.png'

export function ProjectCard ({ project, projectImage, onDelete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const projectId = project.projectId
  const imageName = project.title.replace(/\s+/g, '') + project.projectId

  const handleDeleteClick = () => {
    onDelete(projectId, imageName)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setImageError(true)
    console.error('Error al cargar la imagen')
  }

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCard}>
        {isLoading && <div className={styles.loader} />} {/* Muestra el loader mientras carga */}

        {projectImage && !imageError
          ? (
            <img
              src={projectImage}
              alt={logo}
              style={{ width: '40vw', height: 'auto', display: isLoading ? 'none' : 'block' }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            )
          : (
            <h1>{project.title}</h1>
            )}

        <p>{project.description}</p>
        <p>{project.writeBinnacle}</p>
        <button className={styles.button} onClick={handleDeleteClick}>
          Borrar
        </button>
      </div>
    </div>
  )
}
