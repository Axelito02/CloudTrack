import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Navbar } from '../../components'
// import { useBitacoras } from '../../../hooks/useBitacoras'
// import { useFilters } from '../../hooks/useFilters';
import styles from './ProjectDetailPage.module.css'
import { Botones } from '../../components/botones/Botones'

export function ProjectDetailPage () {
  const location = useLocation()
  const project = location.state
  const navigate = useNavigate()

  // Verifica si project está definido y no es null
  if (!project) {
    // Si no hay proyecto, redirige a la página de error o muestra un mensaje
    navigate('/error') // Cambia '/error' por la ruta correcta de tu página de error
    // return <div>No se encontró el proyecto.</div>;
    // O puedes mostrar un mensaje en lugar de redirigir
  }

  // const {
  //   bitacoras,
  //   imageList
  // } = useBitacoras(project.id)

  // const sortedBitacoras = bitacoras.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div>
          <h1>{project && project.title}</h1>
        </div>
        <div className={styles.inputs}>
          <Botones onClick={() => navigate('/proyectos')} titulo='Volver a proyectos' />
          <div>
            <div className={styles.Projects}>
              {/* {sortedBitacoras.length > 0
                ? (
                  <BitacoraCard
                    bitacora={sortedBitacoras[sortedBitacoras.length - 1]} // Obtener el último elemento del array
                    bitacoraImage={imageList.find((img) =>
                      img.includes(sortedBitacoras[sortedBitacoras.length - 1].title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + sortedBitacoras[sortedBitacoras.length - 1].bitacoraId
                      )
                    )}
                  />
                  )
                : (
                  <h3 className={styles.noMatch}>No hay bítacora</h3>
                  )} */}
            </div>
            <Botones onClick={() => navigate(`/proyectos/${project.title}/bitacora`, { state: project })} titulo='Ver bitacora' />
          </div>
        </div>
        <div>
          Contenido
        </div>
      </section>
    </div>
  )
}
