import React from 'react'
import { UploadForm, Navbar, ButtonBack } from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './SubmitPage.module.css'

export function SubmitPage () {
  const location = useLocation()
  const { project, bitacora } = location.state
  const navigate = useNavigate()

  const projectId = project.id
  const bitacoraId = bitacora.id

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>
      <section className='content'>
        <main>
          <div className={styles.header}>
            <ButtonBack onClick={() => navigate(-1)} />
            <div>
              <h1 className={styles.title}>Añadir una actualización a {project.title}</h1>
              <p className='noMargin'>Se añadirá en la carpeta '{bitacora.title}' </p>
            </div>
          </div>

          <UploadForm projectId={projectId} bitacoraId={bitacoraId} />

        </main>
      </section>
    </div>
  )
}
