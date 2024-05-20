import { useLocation } from 'react-router-dom'
import { useAprobaciones } from '../../../hooks/useAprobaciones'
import { AprobacionesCard, Navbar } from '../../components'
import { useFilterApprovals } from '../../../hooks/useFilterApprovals'
import styles from './ApprovalsPage.module.css'

export function ApprovalsPage () {
  const location = useLocation()
  const project = location.state

  const { aprobaciones } = useAprobaciones(project.id)
  const { filter, setFilter, filteredAprobaciones } = useFilterApprovals(aprobaciones)

  const sortedAprobaciones = filteredAprobaciones.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>
      <section className='content'>
        <h1>Aprobaciones</h1>

        <div className={styles.contentContainer}>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <label>
                <input
                  type='radio'
                  value='all'
                  checked={filter === 'all'}
                  onChange={() => setFilter('all')}
                />
                Todas
              </label>
            </div>
            <div className={styles.filter}>
              <label>
                <input
                  type='radio'
                  value='approved'
                  checked={filter === 'approved'}
                  onChange={() => setFilter('approved')}
                />
                Aprobadas
              </label>
            </div>
            <div className={styles.filter}>
              <label>
                <input
                  type='radio'
                  value='notApproved'
                  checked={filter === 'notApproved'}
                  onChange={() => setFilter('notApproved')}
                />
                No Aprobadas
              </label>
            </div>
          </div>

          <div className={styles.approvals}>
            {sortedAprobaciones.length > 0
              ? (
                  sortedAprobaciones.map((aprobacion) => {
                    return (
                      <AprobacionesCard key={aprobacion.id} aprobacion={aprobacion} />
                    )
                  })
                )
              : null}
          </div>
          {sortedAprobaciones.length === 0 && (
            <h3 className={styles.noMatch}>Aún no se han solicitado aprobaciones</h3>
          )}
        </div>
      </section>
    </div>
  )
}