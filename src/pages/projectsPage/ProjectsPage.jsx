import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard, AddButtonSmall, UserProfile } from '../../components'
import { useProjects } from '../../../hooks/useProjects'
import { useFilters } from '../../../hooks/useFilterProjects'
import { useApp } from '../../../hooks/useApp'
import styles from './ProjectsPage.module.css'

export function ProjectsPage () {
  const { setnavState } = useApp()
  const navigate = useNavigate()
  const { projects } = useProjects()
  const { filteredProjects, setFilters } = useFilters(projects)
  const [tempDateRange, setTempDateRange] = useState({ start: '', end: '' })
  const [showFilters, setShowFilters] = useState(false)

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
            <div className={styles.profileComponent}>
              <UserProfile position='header' />
            </div>
          </section>
          <section className={styles.inputs}>
            <div className={styles.filterContainer}>
              <button 
                className={styles.toggleButton} 
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? 'Ocultar filtros' : 'Filtrar por fecha'}
              </button>
              {showFilters && (
                <div className={styles.inputsFilters}>
                  <div>
                    <label htmlFor='startDate'>Desde </label>
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
                    <label htmlFor='endDate'>Hasta </label>
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
                    <button className='button' onClick={applyDateFilter}>Filtrar</button>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.containerCreateProject}>
              <AddButtonSmall onClick={() => navigate('/proyectos/crear-proyecto')} titulo='Nuevo proyecto' icon='../../../../assets/plusIcon.svg' />
              <div className={styles.searchBar}>
                <img src='../../../../assets/searchIcon.svg' />
                <input
                  className={styles.inputBuscar}
                  type='text'
                  placeholder='Buscar por título...'
                  onChange={handleSearchChange}
                />
                <img src='../../../../assets/filterIcon.svg' />
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
                      <ProjectCard
                        project={project}
                        onClick={() => {
                          setnavState('Proyecto')
                          navigate(`/proyectos/${project.title}`, { state: project })
                        }}
                        key={project.id}
                      />
                    )
                  })
                )
              : (
                  null
                )}
          </div>
          {sortedProjects.length === 0 && (
            <h3 className={styles.noMatch}>Los proyectos están cargando </h3>
          )}
        </div>
      </section>
    </div>
  )
}
