import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'

export function Navbar ({ project }) {
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
            <button className={styles.btnLink} onClick={() => navigate(`/${project.title}`, { state: project })}>
              <img className={styles.icon} src='../../../assets/IconHome.svg' />
              <span className={styles.tag}>Proyecto</span>
            </button>
          </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate(`/${project.title}/bitacora`, { state: project })}>
              <img className={styles.icon} src='../../../assets/IconBitacoras.svg' />
              <span className={styles.tag}>Bítacora</span>
            </button>
          </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate(`/${project.title}/progreso`, { state: project })}>
              <img className={styles.icon} src='../../../assets/IconProgress.svg' />
              <span className={styles.tag}>Progreso</span>
            </button>
          </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate(`/${project.title}/aprobaciones`, { state: project })}>
              <img className={styles.icon} src='../../../assets/IconCheck.svg' />
              <span className={styles.tag}>Aprobaciones</span>
            </button>
          </div>

          <div className={styles.link}>
            <button className={styles.btnLink} onClick={() => navigate(`/${project.title}/notificaciones`, { state: project })}>
              <img className={styles.icon} src='../../../assets/IconCamp.svg' />
              <span className={styles.tag}>Notificaciones</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
