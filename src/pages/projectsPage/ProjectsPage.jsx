import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../../components'
import { useProjects } from '../../../hooks/useProjects'
// import { useFilters } from '../../hooks/useFilters';
import styles from './ProjectsPage.module.css'

export function ProjectsPage () {
  const navigate = useNavigate()

  const {
    projects
  } = useProjects()

  function parseDate (dateStr, hourStr) {
    const [day, month, year] = dateStr.split('/').map(Number)
    const [hour, minute] = hourStr.split(':').map(Number)
    return new Date(year, month - 1, day, hour, minute)
  }

  // Ordenar los proyectos por fecha y hora antes de renderizar
  const sortedProjects = projects.sort((a, b) => {
    const dateA = parseDate(a.date, a.hour)
    const dateB = parseDate(b.date, b.hour)
    return dateB - dateA // Ordena de más reciente a más antiguo
  })

  return (
    <>
      <header className={styles.header}>
        <h1>Proyectos</h1>
      </header>
      <div>
        <div className={styles.Projects}>
          {sortedProjects.length > 0
            ? (
                sortedProjects.map((project) => {
                  return (
                    <ProjectCard project={project} onClick={() => navigate(`/proyectos/${project.title}`, { state: project })} key={project.id} />
                  )
                })
              )
            : (
              <h3 className={styles.noMatch}>Lo sentimos, no hay proyectos.</h3>
              )}
        </div>
      </div>
      <button className={styles.navigationButton} onClick={() => navigate('/proyectos/crear-proyecto')}>
        Añadir proyecto
      </button>
    </>
  )
}
