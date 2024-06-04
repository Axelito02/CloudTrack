import React from 'react'
import styles from './RolDetailProject.module.css'
import { RolCard } from '../RolCard/RolCard'

const RolDetailProject = ({ project }) => {
  const tecnicos = project.tecnicos
  const conexiones = project.conexiones
  const redes = project.redes
  const comercial = project.comercial

  console.log(tecnicos)
  return (
    <div className={styles.roles}>
      <div className={styles.rectangle}>
        <h4>Técnicos</h4>
        <div className={styles.cardRender}>
          {tecnicos.length > 0
            ? (
                tecnicos.map((tecnico) => {
                  return (
                    <RolCard
                      nombre={tecnico.nombre}
                      imagen={tecnico.imagen}
                      key={tecnico.nombre}
                    />
                  )
                })
              )
            : (
              <p>No hay técnicos designados a este proyecto</p>
              )}
        </div>
      </div>

      <div className={styles.rectangle}>
        <h4>Conexiones: </h4>
        <div className={styles.cardRender}>
          {conexiones.length > 0
            ? (
                conexiones.map((conexion) => {
                  return (
                    <RolCard
                      nombre={conexion.nombre}
                      imagen={conexion.imagen}
                      key={conexion.nombre}
                    />
                  )
                })
              )
            : (
              <p>No hay personal de conexiones designado a este proyecto</p>
              )}
        </div>
      </div>

      <div className={styles.rectangle}>
        <h4>Redes: </h4>
        <div className={styles.cardRender}>
          {redes.length > 0
            ? (
                redes.map((red) => {
                  return (
                    <RolCard
                      nombre={red.nombre}
                      imagen={red.imagen}
                      key={red.nombre}
                    />
                  )
                })
              )
            : (
              <p>No hay personal de redes designado a este proyecto</p>
              )}
        </div>
      </div>

      <div className={styles.rectangle}>
        <h4>Comercial: </h4>
        <div className={styles.cardRender}>
          {comercial.length > 0
            ? (
                comercial.map((comer) => {
                  return (
                    <RolCard
                      nombre={comer.nombre}
                      imagen={comer.imagen}
                      key={comer.nombre}
                    />
                  )
                })
              )
            : (
              <p>No hay personal del área comercial designado a este proyecto</p>
              )}
        </div>
      </div>

    </div>
  )
}

export default RolDetailProject
