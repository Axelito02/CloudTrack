import React from 'react'
import styles from './ProjectCard.module.css' // CSS Modules

export function ProjectCard ({ project, onClick }) {
  // const [isLoading, setIsLoading] = useState(true)

  // const handleDeleteClick = () => {
  //   onDelete(projectId, imageName)
  // }

  // const handleLoad = () => {
  //   setIsLoading(false)
  // }

  // const handleImageError = () => {
  //   setIsLoading(false)
  //   // setImageError(true)
  //   console.error('Error al cargar la imagen')
  // }

  return (
    <div className={styles.projectCardContainer} onClick={onClick}>
      <div className={styles.projectCard}>
        {/* {isLoading && <div className={styles.loader} />} Muestra el loader mientras carga */}

        <div>
          <h1>{project.title}</h1>
          <p>{project.constructora}</p>
          <p className={styles.projectDate}>{project.date}</p>
        </div>
      </div>
    </div>
  )
}
