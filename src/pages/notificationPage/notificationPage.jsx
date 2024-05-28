import { Navbar } from '../../components/nav-bar/NavBar'
import { useLocation } from 'react-router-dom'
import styles from './NotificationPage.module.css'
import NotificationCard from '../../components/Notification/NotificationCard'

export function Notification () {
  const location = useLocation()
  const project = location.state
  return (

    <div className='mainDiv'>
      <section className='navbar'>
        {/* <Main /> */}
        <Navbar project={project} />
      </section>

      <section className='content'>
        <h1 className={styles.title}>Notificaciones</h1>
        <p className='noMargin'>Notificaciones recientes</p>
        <section className={`${styles.filters} noMargin`}>
          <p className={styles.Recientes}>Recientes</p>
          <p className={styles.todos}>Todos</p>
        </section>

        {/* Aquí estoy llamando al componente NotificationCard y pasando los valores */}
        <NotificationCard name='Luisa Fernandez' text='Esta esperando aprobación de firmas. ' rol='Comercial' />
        <NotificationCard name='Etapa 2' text='Has llegado a la etapa 2 del proyecto, Registro de planos. ' rol='' />
        <NotificationCard name='Confirmacion de Aprobaciones ' text='Se ha aceptado la aprobación de Contratistas ' rol='' />
        <NotificationCard name='Solicitud de Aprobaciones ' text='Se ha aceptado solicitado aprobación de Contratistas' rol='' />
        <NotificationCard name='Bitacora' text='Se ha añadido un nuevo tag a la bitacora “nombre del proyecto”' rol='' />

      </section>
    </div>
  )
}
