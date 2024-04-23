import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../../components'
import { useProjects } from '../../../hooks/useProjects'
import { useUplaodForm } from '../../../hooks/useUplaodForm'
// import { useFilters } from '../../hooks/useFilters';
import styles from './ProjectsPage.module.css'

export function ProjectsPage () {
  const navigate = useNavigate()

  const {
    projects,
    imageList
  } = useProjects()

  const {
    handleErase
  } = useUplaodForm()

  return (
    <>
      <header className={styles.header}>
        <h1>Proyectos</h1>
      </header>
      <div>
        <div className={styles.Projects}>
          {projects.length > 0
            ? (
                projects.map((project) => {
                  const tituloSinEspacios = project.title.replace(/\s+/g, '') + project.projectId
                  const tituloImagen = tituloSinEspacios

                  const projectImage = imageList.find((img) => img.includes(tituloImagen))
                  return (
                    <ProjectCard key={project.id} project={project} projectImage={projectImage} onDelete={handleErase} />
                  )
                })
              )
            : (
              <h3 className={styles.noMatch}>Lo sentimos, no hay proyectos.</h3>
              )}
        </div>
      </div>
      <button className={styles.navigationButton} onClick={() => navigate('/')}>
        Subir proyecto
      </button>
    </>
  )
}
