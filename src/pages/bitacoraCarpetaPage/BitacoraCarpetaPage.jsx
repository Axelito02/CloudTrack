import React from 'react'
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

  const sortedBitacoras = bitacoras.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <h1 className={styles.title}>Bitácora</h1>
        <p className='noMargin'>Proyecto {project.title} </p>
        <h3>Carpetas</h3>
        {/* <Botones onClick={() => navigate(`/${project.title}/bitacora/crear-bitacora`, { state: project })} titulo='Subir bitácora' /> */}
        <div>
          <div className={styles.Projects}>
            {sortedBitacoras.length > 0
              ? (
                  sortedBitacoras.map((bitacora, index) => {
                    const numeroBitacora = (index + 1).toString().padStart(2, '0')
                    return (
                      <BitacoraCarpeta key={bitacora.id} bitacora={bitacora} numero={numeroBitacora} onClick={() => navigate(`/proyectos/${project.title}/bitacora/${bitacora.title}`, { state: { project, bitacora } })} />
                    )
                  })
                )
              : null}
          </div>
          {sortedBitacoras.length === 0 && (
            <h3 className={styles.noMatch}>Lo sentimos, no hay bitácoras en este proyecto. </h3>
          )}
        </div>
      </section>
    </div>
  )
}
