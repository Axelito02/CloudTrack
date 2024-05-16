import { Navbar } from '../../components/nav-bar/NavBar'
import { useLocation } from 'react-router-dom'
import styles from './NotificationPage.module.css'
import NotificationCard from '../../components/Notification/NotificationCard'

export function Notification () {
  const location = useLocation()
  const project = location.state
  return (

    <div className={styles.mainDiv}>
      <section className='navbar'>
        {/* <Main /> */}
        <Navbar project={project} />
      </section>

      <section className={styles.content}>
        <h1>Notificaciones</h1>
        <section className={styles.filters}>
          <div className={styles.Recientes}>
            <p>Recientes</p>
            <hr />
          </div>
          <div className={styles.todos}>
            <p>Todos</p>
            <hr />
          </div>
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
