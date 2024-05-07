import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard, Navbar } from '../../components'
import { useProjects } from '../../../hooks/useProjects'
// import { useFilters } from '../../hooks/useFilters';
import styles from './ProjectsPage.module.css'
import { Botones } from '../../components/botones/Botones'

export function ProjectsPage () {
  const navigate = useNavigate()

  const {
    projects
  } = useProjects()

  const sortedProjects = projects.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='content'>
        <div className={styles.spaceWidth} />
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
        <Botones onClick={() => navigate('/proyectos/crear-proyecto')} titulo='Añadir proyecto' />
      </section>
    </div>
  )
}
