import React, { useState } from 'react'
import { useAddProject } from '../../../hooks/useAddProject'
import styles from './AddProject.module.css'
import { Botones } from '../botones/Botones'

export function AddProject () {
  const {
    disableBtn,
    handleOnChange,
    handleSubmit
  } = useAddProject()

  const [otherConstructionType, setOtherConstructionType] = useState('')

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles.formGroup}>
          <h4
            htmlFor='project-title'
          >
            Nombre del proyecto
          </h4>
          <input
            className={styles.textInput}
            type='text'
            id='project-title'
            name='title'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h4>Empresa constructora</h4>
          <input
            className={styles.costructorInput}
            id='project-constructor'
            name='constructora'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h4>Localidad</h4>
          <input
            className={styles.costructorInput}
            id='project-location'
            name='localidad'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h4>Barrio</h4>
          <input
            className={styles.costructorInput}
            id='project-barrio'
            name='barrio'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h4>Contratista</h4>
          <input
            className={styles.costructorInput}
            id='project-constratista'
            name='contratista'
            onChange={handleOnChange}
          />
        </div>

        {/* Nuevo div: Tipo de venta */}
        <div className={styles.formGroup}>
          <h4>Tipo de venta</h4>
          <div className={styles.radioGroup}>
            <label>
              <input type='radio' name='tipoVenta' value='soloInterna' onChange={handleOnChange} />
              Solo interna
            </label>
            <label>
              <input type='radio' name='tipoVenta' value='soloCargo' onChange={handleOnChange} />
              Solo cargo
            </label>
            <label>
              <input type='radio' name='tipoVenta' value='soloCargo' onChange={handleOnChange} />
              Completo
            </label>
          </div>
        </div>

        {/* Nuevo div: Tipo de construcción */}
        <div className={styles.formGroup}>
          <h4>Tipo de construcción</h4>
          <div className={styles.radioGroup}>
            <label>
              <input type='radio' name='tipoConstruccion' value='casa' onChange={handleOnChange} />
              Casa
            </label>
            <label>
              <input type='radio' name='tipoConstruccion' value='edificio' onChange={handleOnChange} />
              Edificio
            </label>
            <label>
              <input
                type='radio'
                name='tipoConstruccion'
                value='otro' onChange={(e) => {
                  handleOnChange(e)
                  setOtherConstructionType(e.target.checked ? '' : otherConstructionType)
                }}
              />
              Otro:
              <input
                type='text'
                value={otherConstructionType}
                onChange={(e) => setOtherConstructionType(e.target.value)}
                disabled={otherConstructionType === ''}
                className={styles.otherInput}
              />

            </label>
          </div>
        </div>

        {/* Nuevo div: Cantidades */}
        <div className={styles.CantidadesGroup}>
          <h4> Cantidades</h4>
          <label className={styles.Cantidades}>
            <p>Torres:</p>
            <input
              type='text'
              className={styles.quantityInput}
              name='torres'
              onChange={handleOnChange}
            />
          </label>
          <label className={styles.Cantidades}>
            <p>Pisos por torre:</p>
            <input
              type='text'
              className={styles.quantityInput}
              name='edificios'
              onChange={handleOnChange}
            />
          </label>
          <label className={styles.Cantidades}>
            <p>Apartamentos por piso:</p>
            <input
              type='text'
              className={styles.quantityInput}
              name='casas'
              onChange={handleOnChange}
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <h4>Fecha de inicio</h4>
          <input
            type='date'
            className={styles.costructorInput}
            id='project-date'
            name='date'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h4>Fecha estimada finalización</h4>
          <input
            type='date'
            className={styles.costructorInput}
            id='project-endDate'
            name='endDate'
            onChange={handleOnChange}
          />
        </div>
      </div>
      <Botones
        onClick={handleSubmit}
        titulo='Añadir proyecto'
        disabled={disableBtn}
      />
    </form>
  )
}
