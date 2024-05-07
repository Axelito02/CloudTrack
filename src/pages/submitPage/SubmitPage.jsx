import React from 'react'
import { UploadForm, Navbar, Botones } from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './SubmitPage.module.css'

export function SubmitPage () {
  const location = useLocation()
  const project = location.state

  const navigate = useNavigate()
  return (
    <div className={styles.mainDiv}>
    <section className={styles.Navbar}>
      <Navbar />
      <Botones titulo='Volver a bítacoras' onClick={() => navigate(-1)} />
    </section>
    <section className={styles.content}>
      <main>
        {/* <Header /> */}
        <h1>Añadir una bítacora a {project.title}</h1>
        <UploadForm projectId={project.id} />
        {/* <Footer /> */}
      </main>
    </section>
    </div>
  )
}
