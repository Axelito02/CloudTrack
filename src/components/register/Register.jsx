import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Botones } from '../botones/Botones'
import styles from './register.module.css'
import FlechaDespegable from '../../../assets/FlechaDespegable.svg'

export function Register () {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (event, setState) => {
    setState(event.target.value)
  }

  return (
    <section className={styles.ContainerformRegister}>
      <div className={styles.Containertitle}>
        <h1 className={styles.title}>Crea una cuenta</h1>
        <h6 className={styles.description}>
          Bienvenido de nuevo, crea tu cuenta para ingresar a la plataforma
        </h6>
      </div>
      <div className={styles.Containerform}>
        <form className={styles.form}>
          <div className={`${styles.Containerinput} ${name ? styles.hasContent : ''}`}>
            <input
              className={styles.inputForm}
              type='text'
              placeholder='Escribe tu nombre'
              value={name}
              onChange={(event) => handleInputChange(event, setName)}
            />
            <label className={styles.labelForm}>Nombre</label>
          </div>
          <div className={`${styles.Containerinput} ${email ? styles.hasContent : ''}`}>
            <input
              className={styles.inputForm}
              type='email'
              placeholder='Correo electrónico'
              value={email}
              onChange={(event) => handleInputChange(event, setEmail)}
            />
            <label className={styles.labelForm}>Correo electrónico</label>
          </div>
          <div className={`${styles.Containerinput} ${role ? styles.hasContent : ''}`}>
            <div className={styles.selectContainer}>
              <select
                className={styles.inputForm}
                defaultValue='0'
                value={role}
                onChange={(event) => handleInputChange(event, setRole)}
              >
                <option value='0' disabled hidden>
                  Selecciona tu rol
                </option>
                <option value='1'>Técnico superior</option>
                <option value='2'>Redes internas</option>
                <option value='3'>Redes externas</option>
                <option value='4'>Conexiones</option>
                <option value='5'>Comercial</option>
              </select>
              <img src={FlechaDespegable} alt='Flecha despegable' className={styles.selectIcon} />
            </div>
            <label className={styles.labelForm}>Rol</label>
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
      <div className={styles.inputRegister}>
        <Botones onClick={() => navigate('/proyectos')} titulo='Registrarme' />
      </div>
      <div className={styles.ContainerLink}>
        <p className={styles.text}>¿Ya tienes cuenta?</p>
        <a className={styles.link} onClick={() => navigate('/iniciar-sesion')}>
          Iniciar sesión
        </a>
      </div>
    </section>
  )
}
