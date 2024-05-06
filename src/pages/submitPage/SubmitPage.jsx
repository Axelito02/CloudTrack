import React from 'react'
import { UploadForm } from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './SubmitPage.module.css'

export function SubmitPage () {
  const location = useLocation()
  const project = location.state

  const navigate = useNavigate()
  return (
    <>
      {/* <Header /> */}
      <h1>Añadir una imágen {project.title}</h1>
      <UploadForm projectId={project.id} />
      <button className={styles.navigationButton} onClick={() => navigate(-1)}>
        Volver a bítacoras
      </button>
      {/* <Footer /> */}
    </>
  )
}
