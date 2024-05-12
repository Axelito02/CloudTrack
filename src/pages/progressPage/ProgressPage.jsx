import { Navbar } from '../../components/nav-bar/NavBar'
import { useLocation } from 'react-router-dom'
// import styles from './ProgressPage.module.css'

export function Progress () {
  const location = useLocation()
  const project = location.state

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>
      <section className='content'>
        <h1>Progreso</h1>
      </section>
    </div>
  )
}
