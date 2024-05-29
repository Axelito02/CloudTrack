import React from 'react'
import styles from './ProjectCard.module.css' // CSS Modules

export function ProjectCard ({ project, onClick }) {
  // const [isLoading, setIsLoading] = useState(true)

  function formatDate (dateString) {
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  const date = formatDate(project.date)
  const endDate = formatDate(project.endDate)
  console.log(endDate)

  function getProgressPercentage (state) {
    switch (state) {
      case 0:
        return 5
      case 1:
        return 50
      case 2:
        return 100
      default:
        return 0 // Por defecto, si el estado no es 0, 1 o 2
    }
  }

  let statusImage = ''
  let statusText = ''

  if (project.estado === 0) {
    statusImage = '../../../assets/Clock.svg'
    statusText = 'Pendiente'
  } else if (project.estado === 1) {
    statusImage = '../../../assets/Sandclock.svg'
    statusText = 'En progreso'
  } else if (project.estado === 2) {
    statusImage = '../../../assets/IconCheckFilledColor.svg'
    statusText = 'Completo'
  }

  const progressPercentage = getProgressPercentage(project.estado)

  const noMargin = {
    margin: 0
  }

  return (
    <div className={styles.projectCard} onClick={onClick}>
      <div className={styles.upperHalf}>
        <div className={styles.mainInfo}>
          <div>
            {date !== 'Invalid Date'
              ? (
                  endDate !== 'Invalid Date'
                    ? (
                      <p className='subText'>{date} - {endDate}</p>
                      )
                    : (
                      <p className='subText'>{date}</p>
                      )
                )
              : (
                <p className='subText'>Sin fecha asignada</p>
                )}
            <h5 style={noMargin} className={styles.renglon}>{project.title}</h5>
            <p className='subText'>{project.constructora}</p>
          </div>

          <img className={styles.cardLogo} src='https://cdn-icons-png.flaticon.com/512/5149/5149019.png' />
        </div>
        <div>
          <p style={noMargin} className='subText'>{progressPercentage}%</p>
          <progress value={progressPercentage} max='100' />
        </div>
      </div>

      <div className={styles.lowerHalf}>
        {project.estado !== 2 && (
          <div className={styles.icons}>
            <img src='../../../assets/IconNotificationFilled.svg' alt='Notification icon' />
            <p className='subText'>12</p>
          </div>
        )}
        <div className={styles.icons}>
          <img src={statusImage} alt='Status icon' />
          <p className='subText'>{statusText}</p>
        </div>
      </div>
    </div>

  )
}
