// import { Main } from '../Components'
import { Navbar } from '../../components'
// import styles from './HomePage.module.css'

export function HomePage () {
  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='content'>
        <h1>Homepage</h1>
      </section>
    </div>
  )
}
