import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useApp } from '../../../hooks/useApp'
import { UserProfile } from '../Userprofile/UserProfile'

export function Navbar ({ project }) {
  const navigate = useNavigate()
  const { navState, setnavState } = useApp() // Usa el hook useApp para acceder al estado del enlace activo

  const handleNavLinkClick = (path) => {
    setnavState(path) // Actualiza el estado del enlace activo
  }

  return (
    <div className={styles.ContainerMain}>
      <div className={styles.logoCloudTrack}>
        <img className={styles.icon} src='../../../../assets/LogoCloudTrack.png' onClick={() => navigate('/proyectos')} />
      </div>
      <div className={styles.linkPages}>
        <div className={`${styles.link} ${navState === 'Proyecto' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Proyecto')
              navigate(`/proyectos/${project.title}`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../../assets/IconProject.svg' />
            <span className={styles.tag}>Proyecto</span>
          </button>
        </div>
        <div className={`${styles.link} ${navState === 'Bitacora' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Bitacora')
              navigate(`/proyectos/${project.title}/bitacora`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../../assets/IconBitacoras.svg' />
            <span className={styles.tag}>Bitácora</span>
          </button>
        </div>
        <div className={`${styles.link} ${navState === 'Progreso' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Progreso')
              navigate(`/proyectos/${project.title}/progreso`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../../assets/IconProgress.svg' />
            <span className={styles.tag}>Progreso</span>
          </button>
        </div>
        <div className={`${styles.link} ${navState === 'Aprobaciones' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Aprobaciones')
              navigate(`/proyectos/${project.title}/aprobaciones`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../../assets/IconCheck.svg' />
            <span className={styles.tag}>Aprobaciones</span>
          </button>
        </div>
        <div className={`${styles.link} ${navState === 'Notificaciones' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Notificaciones')
              navigate(`/proyectos/${project.title}/notificaciones`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../../assets/IconCamp.svg' />
            <span className={styles.tag}>Notificaciones</span>
          </button>
        </div>
      </div>
      <div className={styles.userProfile}>
        <UserProfile position='nav' />
      </div>
    </div>
  )
}
