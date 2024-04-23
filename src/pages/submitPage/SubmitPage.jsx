import React from 'react'
import { UploadForm } from '../../components'
import { useNavigate } from 'react-router-dom'
import styles from './SubmitPage.module.css'

export function SubmitPage () {
  const navigate = useNavigate()
  return (
    <>
      {/* <Header /> */}
      <h1>Añadir una imágen</h1>
      <UploadForm />
      <button className={styles.navigationButton} onClick={() => navigate('/proyectos')}>
        Ir a proyectos
      </button>
      {/* <Footer /> */}
    </>
  )
}
