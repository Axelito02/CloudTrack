// import { Main } from '../Components'
import { Navbar } from '../../components/nav-bar/NavBar'
import styles from './ApprovalsPage.module.css'

export function Approvals () {
  return (
    <div className={styles.mainDiv}>
      <section className={styles.navbar}>
        {/* <Main /> */}
        <Navbar />
      </section>
      <section className={styles.content}>
        <h1>Aprobaciones</h1>
      </section>
    </div>
  )
}
