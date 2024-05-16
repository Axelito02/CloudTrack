import React from 'react'
import { useAddProject } from '../../../hooks/useAddProject'
import styles from './AddProject.module.css'
import { Botones } from '../botones/Botones'

export function AddProject () {
  const {
    disableBtn,
    handleOnChange,
    handleSubmit
  } = useAddProject()

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <h4 htmlFor='project-title'>Nombre del proyecto</h4>
        <input
          className={styles.textInput}
          type='text'
          id='project-title'
          name='title'
          onChange={handleOnChange}
        />

        <h4>Empresa costructora</h4>
        <input
          className={styles.costructorInput}
          id='project-constructor'
          name='constructora'
          onChange={handleOnChange}
        />

        <h4>Localidad</h4>
        <input
          className={styles.costructorInput}
          id='project-location'
          name='localidad'
          onChange={handleOnChange}
        />

        <h4>Barrio</h4>
        <input
          className={styles.costructorInput}
          id='project-barrio'
          name='barrio'
          onChange={handleOnChange}
        />

        <h4>Contratista</h4>
        <input
          className={styles.costructorInput}
          id='project-constratista'
          name='contratista'
          onChange={handleOnChange}
        />

        <h4>Fecha de inicio</h4>
        <input
          type='date'
          className={styles.costructorInput}
          id='project-date'
          name='date'
          onChange={handleOnChange}
        />

        <h4>Fecha estimada de finalización</h4>
        <input
          type='date'
          className={styles.costructorInput}
          id='project-endDate'
          name='endDate'
          onChange={handleOnChange}
        />
      </div>

      <Botones onClick={handleSubmit} titulo='Añadir proyecto' disabled={disableBtn} />
    </form>
  )
}
