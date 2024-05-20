import { Botones } from '../../components'
import { useNavigate } from 'react-router-dom'
// import styles from './NotificationPage.module.css'

export function ErrorPage () {
  const navigate = useNavigate()

  return (
    <div className='mainDiv'>
      <section className='content'>
        <h1>Error</h1>
          <Botones titulo='Volver' onClick={() => navigate(-1)} />
      </section>
    </div>
  )
}
