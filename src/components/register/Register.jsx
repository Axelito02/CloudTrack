import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botones } from '../botones/Botones'
import styles from './register.module.css'

export function Register () {
  const navigate = useNavigate()

  return (
    <section className={styles.ContainerformRegister}>
      <div className={styles.Containertitle}>
        <h1>Crea una cuenta</h1>
      </div>
      <div className={styles.Containerform}>
        <form className={styles.form}>
          <div className={styles.Containerinput}>
            <input className={styles.inputForm} type='text' placeholder='Escribe tu nombre' />
          </div>
          <div className={styles.Containerinput}>
            <input className={styles.inputForm} type='email' placeholder='Correo electronico' />
          </div>
          <div className={styles.Containerinput}>
            <select className={styles.inputForm} defaultValue='0'>
              <option value='0' disabled hidden>Selecciona tu rol</option>
              <option value='1'>Tecnico superior</option>
              <option value='2'>Redes internas</option>
              <option value='3'>Redes externas</option>
              <option value='4'>Conexiones</option>
              <option value='5'>Comercial</option>
            </select>
          </div>
          <div className={styles.Containerinput}>
            <input className={styles.inputForm} type='password' placeholder='Contraseña' />
          </div>
        </form>
      </div>
      <div className={styles.inputRegister}>
        <Botones onClick={() => navigate('/')} titulo='Registrarme' />
      </div>
      <div className={styles.ContainerLink}>
        <p className={styles.text}>¿Ya tienes cuenta?</p>
        <a className={styles.link} onClick={() => navigate('/iniciar-sesion')}>Iniciar sesión</a>
      </div>
    </section>
  )
}
