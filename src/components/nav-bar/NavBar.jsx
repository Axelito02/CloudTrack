import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'

export function Navbar () {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.ContainerMain}>

        <div className={styles.logoCloudTrack}>
          <img className={styles.icon} src='../../../assets/LogoCloudTrack.png' onClick={() => navigate('/')} />
        </div>

        <div className={styles.linkPages}>
{/* 
          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate('/')}>
              <img className={styles.icon} src='../../../assets/IconHome.svg' />
              <span className={styles.tag}>Home</span>
              </button>
            </div> */}

            <div className={styles.link}>
              <button className={styles.btnLink} onClick={() => navigate('/proyectos')}>
                <img className={styles.icon} src='../../../assets/IconBitacoras.svg' />
                <span className={styles.tag}>Proyectos</span>
              </button>
            </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate('/progreso')}>
              <img className={styles.icon} src='../../../assets/IconProgress.svg' />
              <span className={styles.tag}>Progreso</span>
            </button>
          </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate('/aprobaciones')}>
              <img className={styles.icon} src='../../../assets/IconCheck.svg' />
              <span className={styles.tag}>Aprobaciones</span>
            </button>
          </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate('/notificaciones')}>
              <img className={styles.icon} src='../../../assets/IconCamp.svg' />
              <span className={styles.tag}>Notificaciones</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
