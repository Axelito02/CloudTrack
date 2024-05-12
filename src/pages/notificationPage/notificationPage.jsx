import { Navbar } from '../../components/nav-bar/NavBar'
import { useLocation } from 'react-router-dom'
// import styles from './NotificationPage.module.css'

export function Notification () {
  const location = useLocation()
  const project = location.state

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>
      <section className='content'>
        <h1>Notificaciones</h1>
      </section>
    </div>
  )
}
