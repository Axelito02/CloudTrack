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
        <h4 htmlFor='project-title'>Título</h4>
        <input
          className={styles.textInput}
          type='text'
          id='project-title'
          name='title'
          onChange={handleOnChange}
        />

        <h4>Nombre de la costructora</h4>
        <textarea
          className={styles.costructorInput}
          id='project-constructor'
          name='constructora'
          rows='4'
          cols='50'
          onChange={handleOnChange}
        />
      </div>

      <Botones onClick={handleSubmit} titulo='Añadir proyecto' disabled={disableBtn} />
    </form>
  )
}