// import { Main } from '../Components'
import { Navbar } from '../../components/nav-bar/NavBar'
// import styles from './ApprovalsPage.module.css'

export function Approvals () {
  return (
    <div className='mainDiv'>
      <section className='navbar'>
        {/* <Main /> */}
        <Navbar />
      </section>
      <section className='content'>
        <h1>Aprobaciones</h1>
      </section>
    </div>
  )
}
