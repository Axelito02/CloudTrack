// src/pages/ProjectsPage.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard, Botones, UserProfile } from '../../components'
import { useProjects } from '../../../hooks/useProjects'
import { useFilters } from '../../../hooks/useFilterProjects'
import styles from './ProjectsPage.module.css'

export function ProjectsPage () {
  const navigate = useNavigate()
  const { projects } = useProjects()
  const { filteredProjects, setFilters } = useFilters(projects)
  const [tempDateRange, setTempDateRange] = useState({ start: '', end: '' })

  const sortedProjects = filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date))

  const handleSearchChange = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }))
  }

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target
    setTempDateRange(prev => ({ ...prev, [name]: value }))
  }

  const applyDateFilter = () => {
    setFilters(prev => ({ ...prev, dateRange: tempDateRange }))
  }

  return (
    <div className='mainDiv'>
      <section className='content'>
        <header>
          <section className={styles.head}>
            <div className={styles.title}>
              <h1>Proyectos</h1>
            </div>
            <div className={styles.headUserProfile}>
              <div className={styles.profileComponent}>
                <UserProfile />
              </div>
            </div>
          </section>
          <section className={styles.inputs}>
            <div className={styles.inputsFilters}>
              <div>
              <label htmlFor="startDate">Filtrar Desde </label>
                  <input
                    id='startDate'
                    className='inputBuscar'
                    type='date'
                    name='start'
                    value={tempDateRange.start}
                    onChange={handleDateRangeChange}
                  />
              </div>
              <div>
              <label htmlFor="endDate">hasta </label>
                <input
                  id='endDate'
                  className='inputBuscar'
                  type='date'
                  name='end'
                  value={tempDateRange.end}
                  onChange={handleDateRangeChange}
                />
              </div>
              <div>
                <button className='button' onClick={applyDateFilter}>Filtrar por fecha</button>
              </div>
            </div>
            <div className={styles.containerCreateProject}>
              <Botones onClick={() => navigate('/crear-proyecto')} titulo='Añadir proyecto' />
              <div>
                  <input
                    className='inputBuscar'
                    type='text'
                    placeholder='Buscar por título...'
                    onChange={handleSearchChange}
                  />
                </div>
            </div>
          </section>
        </header>
        <div>
          <div className={styles.Projects}>
            {sortedProjects.length > 0
              ? (
                  sortedProjects.map((project) => {
                    return (
                      <ProjectCard project={project} onClick={() => navigate(`/${project.title}`, { state: project })} key={project.id} />
                    )
                  })
                )
              : (
                <h3 className={styles.noMatch}>Lo sentimos, no hay proyectos.</h3>
                )}
          </div>
        </div>
      </section>
    </div>
  )
}
