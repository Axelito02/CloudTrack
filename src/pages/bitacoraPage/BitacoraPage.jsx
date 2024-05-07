import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BitacoraCard, Navbar } from '../../components'
import { useBitacoras } from '../../../hooks/useBitacoras'
import { useUploadForm } from '../../../hooks/useUploadForm'
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

  const {
    handleErase
  } = useUploadForm(project.id)

  const sortedBitacoras = bitacoras.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <>
      <header className={styles.header}>
        <Navbar />
        <Botones onClick={() => navigate('/proyectos')} titulo='Volver a proyectos' />

        <h1>Bítacoras {project.title}</h1>
      </header>
      <div>
        <div className={styles.Projects}>
          {sortedBitacoras.length > 0
            ? (
                sortedBitacoras.map((bitacora) => {
                  const tituloImagen = bitacora.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + bitacora.bitacoraId

                  const bitacoraImage = imageList.find((img) => img.includes(tituloImagen))

                  return (
                    <BitacoraCard key={bitacora.id} bitacora={bitacora} bitacoraImage={bitacoraImage} onDelete={handleErase} />
                  )
                })
              )
            : (
              <h3 className={styles.noMatch}>Lo sentimos, no hay bítacoras en este proyecto.</h3>
              )}
        </div>
      </div>

      <Botones onClick={() => navigate(`/proyectos/${project.title}/crear-bitacora`, { state: project })} titulo='Subir bitácora' />

    </>
  )
}
