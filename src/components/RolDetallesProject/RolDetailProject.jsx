import React, { useState } from 'react'
import styles from './RolDetailProject.module.css'

const RolDetailProject =  ({ nombre, imagenUrl }) => {
  return (
    <div className={styles.roles}>
        <div class={styles.rectangle}>
          <h4>Técnicos</h4>
          <div className={styles.tecnicos}>
            <img src={imagenUrl} />
            <p>{nombre}</p>
          </div>
        </div>

        <div class={styles.rectangle}>
          <h4>Conexiones: </h4>
          <div className={styles.tecnicos}>
            <img src={imagenUrl} />
            <p>{nombre}</p>
          </div>
        </div>

        <div class={styles.rectangle}>
          <h4>Redes: </h4>
          <div className={styles.tecnicos}>
            <img src={imagenUrl} />
            <p>{nombre}</p>
          </div>
        </div>
        
        <div class={styles.rectangle}>
          <h4>Comercial: </h4>
          <div className={styles.tecnicos}>
            <img src={imagenUrl} />
            <p>{nombre}</p>
          </div>
        </div>

    </div>
  )
}

export default RolDetailProject
