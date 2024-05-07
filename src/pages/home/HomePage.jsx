// import { Main } from '../Components'
import { Navbar } from '../../components'
import styles from './HomePage.module.css'

export function HomePage () {
  return (
    <div className={styles.mainDiv}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.content}>
        <h1>Homepage</h1>
      </section >
    </div>
  )
}
