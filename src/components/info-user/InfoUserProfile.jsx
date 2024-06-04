import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './InfoUserProfile.module.css'

export function InfoUser () {
  const [inputsEnabled, setInputsEnabled] = useState(false)
  const [phone, setPhone] = useState('+573004488715')

  const toggleInputs = () => {
    setInputsEnabled(!inputsEnabled)
  }

  return (
    <div className={styles.containerInfoUserProfile}>
      <div className={styles.name}>
        <h2>Laura Sanchez</h2>
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.description}>
          <div className={styles.tag}>
            <h4>Acerca de Laura:</h4>
          </div>
          <div className={styles.iconEdit}>
            <label className={styles.labelIcon} htmlFor='descriptionUser' onClick={toggleInputs}>
              <img
                src={inputsEnabled ? '/assets/IconCheckEdit.svg' : '/assets/EditIcon2.svg'}
                alt='Edit Icon'
              />
            </label>
          </div>
        </div>
        <div className={styles.roleOccupation}>
          <div className={styles.role}>
            <label htmlFor='role'>
              <h6>Rol:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <select className={styles.inputForm} id='role' defaultValue='5' disabled={!inputsEnabled}>
                <option value='0' disabled hidden>Selecciona tu rol</option>
                <option value='1'>Tecnico superior</option>
                <option value='2'>Redes internas</option>
                <option value='3'>Redes externas</option>
                <option value='4'>Conexiones</option>
                <option value='5'>Comercial</option>
              </select>
            </div>
          </div>
          <div className={styles.ocupation}>
            <label htmlFor='ocupation'>
              <h6>Ocupación:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <input type='text' id='ocupation' defaultValue='Ingeniera civil' placeholder='Ocupación' disabled={!inputsEnabled} />
            </div>
          </div>
        </div>
        <div className={styles.contactInformation}>
          <div className={styles.number}>
            <label htmlFor='number'>
              <h6>Celular:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <PhoneInput
                country='co'
                value={phone}
                onChange={setPhone}
                disabled={!inputsEnabled}
                inputProps={{
                  id: 'number'
                }}
                containerClass={styles.phoneInputContainer}
                inputClass={`${styles.phoneInput} ${!inputsEnabled ? styles.disabledInput : ''}`}
              />
            </div>
          </div>
          <div className={styles.email}>
            <label htmlFor='email'>
              <h6>Correo electronico:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <input type='text' id='email' defaultValue='Laura@gmail.com' placeholder='Correo electronico' disabled={!inputsEnabled} />
            </div>
          </div>
        </div>
        <div className={styles.availability}>
          <div>
            <h6>Disponibilidad:</h6>
          </div>
          <div>
            <p>En 102 proyectos pendientes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
