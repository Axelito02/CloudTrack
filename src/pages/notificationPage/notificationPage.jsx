// import { Main } from '../Components'
import { Navbar } from '../../components/nav-bar/NavBar'
import styles from './NotificationPage.module.css'

export function Notification () {
  return (
    <div className={styles.mainDiv}>
      <section className={styles.navbar}>
        {/* <Main /> */}
        <Navbar />
      </section>
      <section className={styles.content}>
        <h1>Notificaciones</h1>
      </section>
    </div>
  )
}
