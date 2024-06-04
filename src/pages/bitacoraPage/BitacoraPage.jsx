import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard, Navbar, ButtonBack, AddButtonBig, Botones } from '../../components'
import { useNotas } from '../../../hooks/useNotas'
import { useFiltersNotas } from '../../../hooks/useFilterNotas'
import styles from './BitacoraPage.module.css'

export function BitacoraPage () {
  const location = useLocation()
  const { project, bitacora } = location.state
  const navigate = useNavigate()

  const projectId = project.id
  const bitacoraId = bitacora.id

  const { notas } = useNotas({ projectId, bitacoraId })

  const { filterednotas, setFilters, setSearchTerm } = useFiltersNotas(notas)

  const sortedNotas = filterednotas.sort((a, b) => new Date(b.date) - new Date(a.date))

  const [tempDateRange, setTempDateRange] = useState({ start: '', end: '' })
  const [showFilters, setShowFilters] = useState(false)

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target
    setTempDateRange(prev => ({ ...prev, [name]: value }))
  }

  const applyDateFilter = () => {
    setFilters(prev => ({ ...prev, dateRange: tempDateRange }))
    console.log('Date Range Applied:', tempDateRange)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.containerContent}>
          <div className={styles.header}>
            <ButtonBack onClick={() => navigate(-1)} />
            <div>
              <h1 className={styles.title}>Actualizaciones</h1>
              <p className='noMargin'> Proyecto {project.title} - {bitacora.title}</p>
            </div>
          </div>
          <div className={styles.containerInputs}>
            <div className={styles.inputs}>
              <div className={styles.filterContainer}>

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
              <div className={styles.searchBar}>
                {/* Input para ingresar el nombre a filtrar */}
                <img src='/assets/searchIcon.svg' />
                <input
                  className={styles.inputBuscar}
                  type='text'
                  onChange={handleSearchChange}
                  placeholder='Filtrar por nombre'
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.Projects}>
              <div>
                <AddButtonBig onClick={() => navigate(`/proyectos/${project.title}/bitacora/${bitacora.title}/crear-bitacora`, { state: { project, bitacora } })} titulo='Añadir nueva nota' />
              </div>
              {/* Aplicar el filtro al mapear las notas */}
              {sortedNotas.length > 0
                ? (
                    sortedNotas.map((nota) => {
                      return (
                        <BitacoraCard key={bitacora.id} nota={nota} onClick={() => navigate(`/proyectos/${project.title}/bitacora/${bitacora.title}/${nota.title}`, { state: { project, bitacora, nota } })} />
                      )
                    })
                  )
                : (
                    null
                  )}
            </div>
            {sortedNotas.length === 0 && (
              <h4 className={styles.noMatch}>No se encontraron notas en esta carpeta. <br /> Agrega una desde el botón "Añadir nueva nota" </h4>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
