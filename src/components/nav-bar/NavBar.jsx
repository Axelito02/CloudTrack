import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'

export function Navbar ({ project }) {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState('/')

  // Función para cambiar el enlace activo y navegar a la nueva ruta
  const handleNavLinkClick = (path) => {
    // Primero, actualizamos el estado del enlace activo
    setActiveLink(path)
    // Luego, navegamos a la nueva ruta
    navigate(path, { state: project })
  }

  return (
    <div className={styles.ContainerMain}>
      <div className={styles.logoCloudTrack}>
        <img className={styles.icon} src='../../../assets/LogoCloudTrack.png' onClick={() => navigate('/')} />
      </div>
      <div className={styles.linkPages}>
        <div className={`${styles.link} ${activeLink === `/${project.title}` ? styles.active : ''}`}>
          <button className={styles.btnLink} onClick={() => handleNavLinkClick(`/${project.title}`)}>
            <img className={styles.icon} src='../../../assets/IconHome.svg' />
            <span className={styles.tag}>Proyecto</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === `/${project.title}/bitacora` ? styles.active : ''}`}>
          <button className={styles.btnLink} onClick={() => handleNavLinkClick(`/${project.title}/bitacora`)}>
            <img className={styles.icon} src='../../../assets/IconBitacoras.svg' />
            <span className={styles.tag}>Bítacora</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === `/${project.title}/progreso` ? styles.active : ''}`}>
          <button className={styles.btnLink} onClick={() => handleNavLinkClick(`/${project.title}/progreso`)}>
            <img className={styles.icon} src='../../../assets/IconProgress.svg' />
            <span className={styles.tag}>Progreso</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === `/${project.title}/aprobaciones` ? styles.active : ''}`}>
          <button className={styles.btnLink} onClick={() => handleNavLinkClick(`/${project.title}/aprobaciones`)}>
            <img className={styles.icon} src='../../../assets/IconCheck.svg' />
            <span className={styles.tag}>Aprobaciones</span>
          </button>
        </div>
        <div className={`${styles.link} ${activeLink === `/${project.title}/notificaciones` ? styles.active : ''}`}>
          <button className={styles.btnLink} onClick={() => handleNavLinkClick(`/${project.title}/notificaciones`)}>
            <img className={styles.icon} src='../../../assets/IconCamp.svg' />
            <span className={styles.tag}>Notificaciones</span>
          </button>
        </div>
      </div>
    </div>
  )
}
