import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard, Navbar, ButtonBack, AddButtonBig } from '../../components'
import { useNotas } from '../../../hooks/useNotas'
import styles from './BitacoraPage.module.css'

export function BitacoraPage () {
  const location = useLocation()
  const { project, bitacora } = location.state
  const navigate = useNavigate()

  const projectId = project.id
  const bitacoraId = bitacora.id

  const {
    notas,
    imageList
  } = useNotas({ projectId, bitacoraId })

  const sortedNotas = notas.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Estado para manejar el valor del filtro por nombre
  const [filtroNombre, setFiltroNombre] = useState('')

  // Función para filtrar notas por nombre
  const filtrarPorNombre = nota => {
    return nota.title.toLowerCase().includes(filtroNombre.toLowerCase())
  }

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.containerContent}>
          <div className={styles.header}>
            <ButtonBack />
            <div>
              <h1 className={styles.title}>Actualizaciones</h1>
              <p className='noMargin'> Proyecto {project.title} - {bitacora.title}</p>
            </div>
          </div>
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
          <div>
            <div className={styles.Projects}>
              <div>
                <AddButtonBig onClick={() => navigate(`/proyectos/${project.title}/bitacora/${bitacora.title}/crear-bitacora`, { state: { project, bitacora } })} titulo='Añadir nueva nota' />
              </div>
              {/* Aplicar el filtro al mapear las notas */}
              {sortedNotas.filter(filtrarPorNombre).length > 0
                ? (
                    sortedNotas.filter(filtrarPorNombre).map((nota) => {
                      const tituloImagen = nota.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + nota.notaId

                      const notaImage = imageList.find((img) => img.includes(tituloImagen))

                      return (
                        <BitacoraCard key={bitacora.id} nota={nota} notaImage={notaImage} onClick={() => navigate(`/proyectos/${project.title}/bitacora/${bitacora.title}/${nota.title}`, { state: { project, bitacora, nota } })} />
                      )
                    })
                  )
                : <h5 className={styles.noMatch}>No hay notas o ninguna coincide con el filtro.</h5>}
            </div>
            {sortedNotas.length === 0 && (
              <h4 className={styles.noMatch}>No hay notas en esta carpeta. <br /> Agrega una desde el botón "Añadir nueva nota" </h4>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
