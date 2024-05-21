import React, { useState } from 'react';
import styles from './InfoUserProfile.module.css';

export function InfoUser() {
  const [inputsEnabled, setInputsEnabled] = useState(false);

  const toggleInputs = () => {
    setInputsEnabled(!inputsEnabled);
  };

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
            <label className={styles.labelIcon} htmlFor="descriptionUser" onClick={toggleInputs}>
              <img 
                src={inputsEnabled ? "../../../../assets/IconCheckEdit.svg" : "../../../../assets/EditIcon2.svg"} 
                alt="Edit Icon" 
              />
            </label>
          </div>
        </div>
        <div className={styles.roleOccupation}>
          <div className={styles.role}>
            <label htmlFor="role">
              <h6>Rol:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <input type='text' id='role' placeholder='Comercial' disabled={!inputsEnabled} />
            </div>
          </div>
          <div className={styles.ocupation}>
            <label htmlFor="ocupation">
              <h6>Ocupación:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <input type='text' id='ocupation' placeholder='Ingeniera civil' disabled={!inputsEnabled} />
            </div>
          </div>
        </div>
        <div className={styles.contactInformation}>
          <div className={styles.number}>
            <label htmlFor="number">
              <h6>Celular:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <input type='text' id='number' placeholder='+57 3004488715' disabled={!inputsEnabled} />
            </div>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">
              <h6>Correo electronico:</h6>
            </label>
            <div className={`${styles.inputsInfo} ${inputsEnabled ? styles.enabled : ''}`}>
              <input type='text' id='email' placeholder='Laura@gmail.com' disabled={!inputsEnabled} />
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
  );
}
