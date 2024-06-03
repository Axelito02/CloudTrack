import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddProject, ButtonBack, Navbar, RolesContainer } from '../../components'
import styles from './EditProject.module.css'
import icono from '../../../assets/SandClock.png'
import flecha from '../../../assets/flecha.png'

export function EditProject () {
  const location = useLocation()
  const { project } = location.state
  const navigate = useNavigate()

  console.log(project.tecnicos)

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.header}>
          <ButtonBack onClick={() => navigate(-1)} />
          <h1 className={styles.title}>Editar Proyecto</h1>
        </div>
        <div className={styles.orangeRectangle}>
          <h4>Estado construcción </h4>
          <div className={styles.iconTextContainer}>
            <img src={icono} alt='Sand Clock' className={styles.icon} />
            <p className={styles.text}>En progeso</p>
          </div>
          <img src={flecha} alt='Flecha' className={styles.buttonIcon} />
        </div>
        <AddProject />
        <RolesContainer
          chosenTecnicos={project.tecnicos}
          chosenConexiones={project.onexiones}
          chosenRedes={project.redes}
          chosenComercial={project.comercial}
        />
      </section>
    </div>
  )
}

export default EditProject
