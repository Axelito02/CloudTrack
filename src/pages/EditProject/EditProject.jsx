import React from 'react'
import { AddProject, ButtonBack } from '../../components'
import RolesContainer from '../../components/RolesContainer/RolesContainer'
import styles from './EditProject.module.css'
import icono from '../../../assets/SandClock.png'
import flecha from '../../../assets/flecha.png'

export function EditProject () {
  return (
    <div className='mainDiv'>
      <section className='content'>
        <div className={styles.header}>
          <ButtonBack />
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
        <RolesContainer />
      </section>
    </div>
  )
}

export default EditProject
