import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botones } from '../botones/Botones'
import styles from './login.module.css'

export function Login () {
  const navigate = useNavigate()

  return (
    <section className={styles.Containerformlogin}>
      <div className={styles.Containertitle}>
        <h1 className={styles.title}>Iniciar sesión</h1>
      </div>
      <div className={styles.Containerform}>
        <form className={styles.form}>
          <div className={styles.Containerinput}>
            <input className={styles.inputForm} type='text' placeholder='Usuario' />
          </div>
          <div className={styles.Containerinput}>
            <input className={styles.inputForm} type='password' placeholder='Contraseña' />
          </div>
        </form>
      </div>
      <div className={styles.inputLogin}>
        <Botones onClick={() => navigate('/')} titulo='Iniciar sesión' />
      </div>
      <div className={styles.ContainerLink}>
        <p className={styles.text}>¿No tienes cuenta?</p>
        <a className={styles.link} onClick={() => navigate('/registro')}>Registrate</a>
      </div>
    </section>
  )
}
