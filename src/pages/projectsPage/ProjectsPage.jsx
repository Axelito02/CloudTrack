import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard, AddButtonSmall, UserProfile, Botones, FilterComponent } from '../../components'
import { useProjects } from '../../../hooks/useProjects'
import { useFilters } from '../../../hooks/useFilterProjects'
import { useApp } from '../../../hooks/useApp'
import { useFilteredProjects } from '../../../hooks/filteredByStatus'
import styles from './ProjectsPage.module.css'
import FlechaDespegable from '../../../assets/arrowIconBlue.svg'

export function ProjectsPage () {
  const { setnavState } = useApp()
  const navigate = useNavigate()
  const { projects } = useProjects()
  const { filteredProjects, setFilters, setSearchTerm } = useFilters(projects)
  const { filteredByStatus, setStatusFilter, statusFilter } = useFilteredProjects(filteredProjects)
  const [tempDateRange, setTempDateRange] = useState({ start: '', end: '' })
  const [showFilters, setShowFilters] = useState(false)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  const sortedProjects = filteredByStatus.sort((a, b) => new Date(b.date) - new Date(a.date))

  useEffect(() => {
    console.log('Filtered Projects:', filteredByStatus)
  }, [filteredByStatus])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target
    setTempDateRange(prev => ({ ...prev, [name]: value }))
  }

  const applyDateFilter = () => {
    setFilters(prev => ({ ...prev, dateRange: tempDateRange }))
    console.log('Date Range Applied:', tempDateRange)
  }

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value)
  }

  return (
    <div className='mainDiv'>
      <section className='content'>
        <header>
          <section className={styles.head}>
            <div className={styles.title}>
              <h1 className={styles.titleText}>Proyectos</h1>
            </div>
            <div className={styles.profileComponent}>
              <UserProfile position='header' />
            </div>
          </section>
          <section className={styles.inputs}>
            <div className={styles.filterContainer}>
              <div className={styles.filterState}>
                <div className={styles.labelStatusFilter}>
                  <label htmlFor='labelStatusFilter'>Ver:</label>
                  <select
                    className={styles.inputStatusFilter}
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                    id='labelStatusFilter'
                  >
                    <option value='all'>Todos</option>
                    <option value='pending'>Pendiente</option>
                    <option value='InProgress'>En progreso</option>
                    <option value='completed'>Completo</option>
                  </select>
                  <img src={FlechaDespegable} alt='Flecha despegable' className={styles.selectIcon} />
                </div>
                <span className={styles.filteredCount}>({filteredByStatus.length})</span> {/* Nuevo elemento para mostrar la cantidad */}
              </div>
              <Botones
                onClick={() => setShowFilters(!showFilters)}
                titulo={showFilters ? 'Ocultar filtro' : 'Filtrar por fecha'}
              />
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
                    <Botones onClick={applyDateFilter} titulo='Filtrar' />
                  </div>
                </div>
              )}
            </div>
            <div className={styles.containerCreateProject}>
              <AddButtonSmall onClick={() => navigate('/proyectos/crear-proyecto')} titulo='Nuevo proyecto' icon='/assets/plusIcon.svg' />
              <div className={styles.searchBar}>
                <img src='/assets/searchIcon.svg' />
                <input
                  className={styles.inputBuscar}
                  type='text'
                  placeholder='Buscar por título...'
                  onChange={handleSearchChange}
                />
                <img className={styles.iconofiltros} src='/assets/filterIcon.svg' onClick={() => setShowAdvancedFilters(!showAdvancedFilters)} />
                {showAdvancedFilters && (
                  <div className={styles.advancedFiltersContainer}>
                    <FilterComponent
                      setFilters={setFilters}
                      setSearchTerm={setSearchTerm}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </header>
        <div className={styles.projectsContainer}>
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
            <h3 className={styles.noMatch}>No se encontraron proyectos</h3>
          )}
        </div>
      </section>
    </div>
  )
}
