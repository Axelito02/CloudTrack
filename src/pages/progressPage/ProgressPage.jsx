// import { Main } from '../Components'
import { Navbar } from '../../components/nav-bar/NavBar'
// import styles from './ProgressPage.module.css'

export function Progress () {
  return (
    <div className='mainDiv'>
      <section className='navbar'>
        {/* <Main /> */}
        <Navbar />
      </section>
      <section className='content'>
        <h1>Progreso</h1>
      </section>
    </div>
  )
}
