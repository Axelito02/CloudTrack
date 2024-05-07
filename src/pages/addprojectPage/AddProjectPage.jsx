import React from 'react'
import { AddProject, Navbar } from '../../components'
// import { useNavigate } from 'react-router-dom'
import styles from './AddProjectPage.module.css'

export function AddProjectPage () {
//   const navigate = useNavigate()
  return (
    <div className={styles.mainDiv}>
      <section className={styles.Navbar}>
          {/* <Header /> */}
          <Navbar />
      </section>
      <section className={styles.content}>
          <h1>Crea un nuevo proyecto</h1>
          <AddProject />
          {/* <Footer /> */}
      </section>
    </div>
  )
}
