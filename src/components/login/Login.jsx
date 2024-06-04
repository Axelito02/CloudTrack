import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Botones } from '../botones/Botones'
import styles from './login.module.css'

export function Login () {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (event, setState) => {
    setState(event.target.value)
  }

  return (
    <section className={styles.Containerformlogin}>
      <div className={styles.Containertitle}>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <h6 className={styles.description}>Bienvenido de nuevo, ingresa a la plataforma con tu cuenta</h6>
      </div>
      <div className={styles.Containerform}>
        <form className={styles.form}>
          <div className={`${styles.Containerinput} ${username ? styles.hasContent : ''}`}>
            <input
              className={styles.inputForm}
              type='text'
              placeholder='Usuario'
              value={username}
              onChange={(event) => handleInputChange(event, setUsername)}
            />
            <label className={styles.labelForm}>Usuario</label>
          </div>
          <div className={`${styles.Containerinput} ${password ? styles.hasContent : ''}`}>
            <input
              className={styles.inputForm}
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={(event) => handleInputChange(event, setPassword)}
            />
            <label className={styles.labelForm}>Contraseña</label>
          </div>
        </form>
      </div>
      <div className={styles.inputLogin}>
        <Botones onClick={() => navigate('/proyectos')} titulo='Iniciar sesión' />
      </div>
      <div className={styles.ContainerLink}>
        <p className={styles.text}>¿No tienes cuenta?</p>
        <a className={styles.link} onClick={() => navigate('/registro')}>
          Registrate
        </a>
      </div>
    </section>
  )
}
