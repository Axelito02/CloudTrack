import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AddProject, ButtonBack } from '../../components'
import RolesContainer from '../../components/RolesContainer/RolesContainer'
import styles from './AddProjectPage.module.css'

export function AddProjectPage () {
  const navigate = useNavigate()
  return (
    <div className='mainDiv'>
      <section className='content'>
        <div className={styles.header}>
          <ButtonBack onClick={() => navigate(-1)} />
          <h1 className={styles.title}>Crea un nuevo proyecto</h1>
        </div>
        <AddProject />
        <RolesContainer />
      </section>
    </div>
  )
}
