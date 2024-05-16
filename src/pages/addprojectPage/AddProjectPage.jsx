import React from 'react'
import { AddProject, ButtonBack } from '../../components'
import styles from './AddProjectPage.module.css'

export function AddProjectPage () {
  return (
    <div className='mainDiv'>
      <section className='content'>
        <div className={styles.header}>
          <ButtonBack />
          <h1 className={styles.title}>Crea un nuevo proyecto</h1>
        </div>
        <AddProject />
      </section>
    </div>
  )
}
