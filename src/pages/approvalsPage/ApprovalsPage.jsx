import { Navbar } from '../../components/nav-bar/NavBar'
import { useLocation } from 'react-router-dom'
import { useAprobaciones } from '../../../hooks/useAprobaciones'
import { AprobacionesCard } from '../../components'
import styles from './ApprovalsPage.module.css'

export function ApprovalsPage () {
  const location = useLocation()
  const project = location.state

  const {
    aprobaciones
  } = useAprobaciones(project.id)

  const sortedAprobaciones = aprobaciones.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>
      <section className='content'>
        <h1>Aprobaciones</h1>

        <div>
          <div className={styles.approvals}>
            {sortedAprobaciones.length > 0
              ? (
                  sortedAprobaciones.map((aprobacion) => {
                    return (
                      <AprobacionesCard key={aprobacion.id} aprobacion={aprobacion} />
                    )
                  })
                )
              : (
                <h3 className={styles.noMatch}>Aún no se han solicitado aprobaciones</h3>
                )}
          </div>
        </div>
      </section>
    </div>
  )
}
