// import { Main } from '../Components'
import { Navbar } from '../../components/nav-bar/NavBar'
// import styles from './NotificationPage.module.css'

export function Notification () {
  return (
    <div className='mainDiv'>
      <section className='navbar'>
        {/* <Main /> */}
        <Navbar />
      </section>
      <section className='content'>
        <h1>Notificaciones</h1>
      </section>
    </div>
  )
}
