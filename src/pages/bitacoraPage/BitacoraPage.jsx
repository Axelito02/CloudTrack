import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard, Navbar, ButtonBack } from '../../components'
import { useNotas } from '../../../hooks/useNotas'
import styles from './BitacoraPage.module.css'
import { Botones } from '../../components/botones/Botones'

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
        <div className={styles.header}>
          <ButtonBack />
          <div>
            <h1 className={styles.title}>Actualizaciones</h1>
            <p className='noMargin'> Proyecto {project.title} - {bitacora.title}</p>
          </div>
        </div>
        {/* Input para ingresar el nombre a filtrar */}
        <input
          className={styles.inputBuscar}
          type='text'
          value={filtroNombre}
          onChange={e => setFiltroNombre(e.target.value)}
          placeholder='Filtrar por nombre'
        />
        <Botones onClick={() => navigate(`/${project.title}/bitacora/${bitacora.title}/crear-bitacora`, { state: { project, bitacora } })} titulo='Añadir nueva nota' />
        <div>
          <div className={styles.Projects}>
            {/* Aplicar el filtro al mapear las notas */}
            {sortedNotas.filter(filtrarPorNombre).length > 0
              ? (
                  sortedNotas.filter(filtrarPorNombre).map((nota) => {
                    const tituloImagen = nota.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + nota.notaId

                    const notaImage = imageList.find((img) => img.includes(tituloImagen))

                    return (
                      <BitacoraCard key={bitacora.id} nota={nota} notaImage={notaImage} onClick={() => navigate(`/${project.title}/bitacora/${bitacora.title}/${nota.title}`, { state: { project, bitacora, nota } })} />
                    )
                  })
                )
              : <h3 className={styles.noMatch}>No hay notas que coincidan con el filtro.</h3>}
          </div>
          {sortedNotas.length === 0 && (
            <h3 className={styles.noMatch}>No hay notas en esta carpeta. </h3>
          )}
        </div>
      </section>
    </div>
  )
}
