import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard, Navbar, ButtonBack } from '../../components'
import { useNotas } from '../../../hooks/useNotas'
// import { useFilters } from '../../hooks/useFilters';
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
        <Botones onClick={() => navigate(`/${project.title}/bitacora/${bitacora.title}/crear-bitacora`, { state: { project, bitacora } })} titulo='Añadir nueva nota' />
        <div>
          <div className={styles.Projects}>
            {sortedNotas.length > 0
              ? (
                  sortedNotas.map((nota) => {
                    const tituloImagen = nota.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + nota.notaId

                    const notaImage = imageList.find((img) => img.includes(tituloImagen))

                    return (
                      <BitacoraCard key={bitacora.id} nota={nota} notaImage={notaImage} onClick={() => navigate(`/${project.title}/bitacora/${bitacora.title}/${nota.title}`, { state: { project, bitacora, nota } })} />
                    )
                  })
                )
              : null}
          </div>
          {sortedNotas.length === 0 && (
            <h3 className={styles.noMatch}>No hay notas en esta carpeta. </h3>
          )}
        </div>
      </section>
    </div>
  )
}
