import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useApp } from '../../../hooks/useApp'

export function Navbar ({ project }) {
  const navigate = useNavigate()
  const { activeLink, setActiveLink } = useApp() // Usa el hook useApp para acceder al estado del enlace activo

  const handleNavLinkClick = (path) => {
    setActiveLink(path) // Actualiza el estado del enlace activo
    // navigate(path, { state: project })
  }

  return (
    <div className={styles.ContainerMain}>
      <div className={styles.logoCloudTrack}>
        <img className={styles.icon} src='../../../assets/LogoCloudTrack.png' onClick={() => navigate('/')} />
      </div>
      <div className={styles.linkPages}>
        <div className={`${styles.link} ${activeLink === 'Proyecto' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Proyecto')
              navigate(`/${project.title}`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../assets/IconHome.svg' />
            <span className={styles.tag}>Proyecto</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === 'Bitacora' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Bitacora')
              navigate(`/${project.title}/bitacora`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../assets/IconBitacoras.svg' />
            <span className={styles.tag}>Bitácora</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === 'Progreso' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Progreso')
              navigate(`/${project.title}/progreso`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../assets/IconProgress.svg' />
            <span className={styles.tag}>Progreso</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === 'Aprobaciones' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Aprobaciones')
              navigate(`/${project.title}/aprobaciones`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../assets/IconCheck.svg' />
            <span className={styles.tag}>Aprobaciones</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === 'Notificaciones' ? styles.active : ''}`}>
          <button
            className={styles.btnLink}
            onClick={() => {
              handleNavLinkClick('Notificaciones')
              navigate(`/${project.title}/notificaciones`, { state: project })
            }}
          >
            <img className={styles.icon} src='../../../assets/IconCamp.svg' />
            <span className={styles.tag}>Notificaciones</span>
          </button>
        </div>
      </div>
    </div>
  )
}
