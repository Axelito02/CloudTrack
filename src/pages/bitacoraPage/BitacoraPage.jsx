import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard, Navbar } from '../../components'
import { useBitacoras } from '../../../hooks/useBitacoras'
// import { useFilters } from '../../hooks/useFilters';
import styles from './BitacoraPage.module.css'
import { Botones } from '../../components/botones/Botones'

export function BitacoraPage () {
  const location = useLocation()
  const project = location.state
  const navigate = useNavigate()

  const {
    bitacoras,
    imageList
  } = useBitacoras(project.id)

  const sortedBitacoras = bitacoras.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <h1>Notas de bítacoras</h1>
        <Botones onClick={() => navigate(`/${project.title}/bitacora/crear-bitacora`, { state: project })} titulo='Subir bitácora' />
        <div>
          <div className={styles.Projects}>
            {sortedBitacoras.length > 0
              ? (
                  sortedBitacoras.map((bitacora) => {
                    const tituloImagen = bitacora.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + bitacora.bitacoraId

                    const bitacoraImage = imageList.find((img) => img.includes(tituloImagen))

                    return (
                      <BitacoraCard key={bitacora.id} bitacora={bitacora} bitacoraImage={bitacoraImage} />
                    )
                  })
                )
              : null}
          </div>
          {sortedBitacoras.length === 0 && (
            <h3 className={styles.noMatch}>Lo sentimos, no hay notas en este proyecto. </h3>
          )}
        </div>
      </section>
    </div>
  )
}
