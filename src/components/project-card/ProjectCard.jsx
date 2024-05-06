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

  function formatDate (dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const date = formatDate(project.date)

  return (
    <div className={styles.projectCardContainer} onClick={onClick}>
      <div className={styles.projectCard}>
        {/* {isLoading && <div className={styles.loader} />} Muestra el loader mientras carga */}

        <div>
          <h2>{project.title}</h2>
          <p>{project.constructora}</p>
          <p className='subText'>{date}</p>
        </div>
      </div>
    </div>
  )
}
