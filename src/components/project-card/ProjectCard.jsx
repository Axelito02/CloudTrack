import React from 'react'
import styles from './ProjectCard.module.css' // CSS Modules
import { Botones } from '../botones/Botones'

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

  const noMargin = {
    margin: 0
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.upperHalf}>
        <div className={styles.mainInfo}>
          <div>
            <p className='subText'>{date}</p>
            <h5 style={noMargin}>{project.title}</h5>
            <p className='subText'>{project.constructora}</p>
          </div>

          <img className={styles.cardLogo} src='https://cdn-icons-png.flaticon.com/512/5149/5149019.png' />
        </div>
        <div>
          <p style={noMargin} className='subText'>50%</p>
          <progress value='50' max='100' />
        </div>
      </div>

      <div className={styles.lowerHalf}>
        <Botones titulo='Ver proyecto' onClick={onClick} />
        <div className={styles.icons}>
          <img src='../../../assets/IconCheckFilledColor.svg' />
          <p className='subText'>Completo</p>
        </div>
        <div className={styles.icons}>
          <img src='../../../assets/IconNotificationFilled.svg' />
          <p className='subText'>12</p>
        </div>
      </div>
    </div>

  )
}
