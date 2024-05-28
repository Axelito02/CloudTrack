import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCarpeta, Navbar } from '../../components'
import { useBitacoras } from '../../../hooks/useBitacoras'
// import { useFilters } from '../../hooks/useFilters';
import styles from './BitacoraCarpetaPage.module.css'
// import { Botones } from '../../components/botones/Botones'

export function BitacoraCarpetaPage () {
  const location = useLocation()
  const project = location.state
  const navigate = useNavigate()

  const {
    bitacoras
  } = useBitacoras(project.id)

  const sortedBitacoras = bitacoras.sort((a, b) => a.order - b.order)

  // Estado para manejar el valor del filtro por nombre
  const [filtroNombre, setFiltroNombre] = useState('')

  // Función para filtrar notas por nombre
  const filtrarPorNombre = nota => {
    const filtro = filtroNombre.toLowerCase()
    const titleMatches = nota.title.toLowerCase().includes(filtro)
    const orderMatches = (nota.order + 1).toString().toLowerCase().includes(filtro) // Convertir a cadena antes de comparar

    return titleMatches || orderMatches
  }

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <h1 className={styles.title}>Bitácora</h1>
        <p className='noMargin'>Proyecto {project.title} </p>

        <div className={styles.flex}>
          <h3>Carpetas</h3>
          <div className={styles.containerInputs}>
            <div className={styles.inputs}>
              <div className={styles.searchBar}>
                {/* Input para ingresar el nombre a filtrar */}
                <img src='../../../../assets/searchIcon.svg' />
                <input
                  className={styles.inputBuscar}
                  type='text'
                  value={filtroNombre}
                  onChange={e => setFiltroNombre(e.target.value)}
                  placeholder='Filtrar por nombre'
                />
                <img src='../../../../assets/filterIcon.svg' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.Projects}>
            {sortedBitacoras.filter(filtrarPorNombre).length > 0
              ? (
                  sortedBitacoras.filter(filtrarPorNombre).map((bitacora) => {
                    return (
                      <BitacoraCarpeta key={bitacora.id} bitacora={bitacora} hasNotes={bitacora.hasNotes} onClick={() => navigate(`/proyectos/${project.title}/bitacora/${bitacora.title}`, { state: { project, bitacora } })} />
                    )
                  })
                )
              : null}
          </div>
          {sortedBitacoras.length === 0 && (
            <>
              <h3 className={`${styles.noMatch} smallText`}>Las bitácoras están cargando. </h3>
              <br />
              <div className='loaderWrapper'><div className='loader' /></div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
