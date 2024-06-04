import React, { useState } from 'react'
import { useAddProject } from '../../../hooks/useAddProject'
import styles from './AddProject.module.css'
import { Botones } from '../botones/Botones'
import { DateInput } from '../dateInput/DateInput'
import { RolesContainer } from '../RolesContainer/RolesContainer'
export function AddProject () {
  const {
    disableBtn,
    handleOnChange,
    handleSubmit,
    handleLogoChange,
    logoUpload,
    handleToggleChoice,
    chosenTecnicos,
    chosenConexiones,
    chosenRedes,
    chosenComercial
  } = useAddProject()

  const [otherConstructionType, setOtherConstructionType] = useState('')

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles.formGroup}>
          <h5
            className={styles.sectionTitle}
            htmlFor='project-title'
          >
            Nombre del proyecto
          </h5>
          <input
            className={styles.textInput}
            type='text'
            id='project-title'
            name='title'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Empresa constructora</h5>
          <input
            className={styles.costructorInput}
            id='project-constructor'
            name='constructora'
            onChange={handleOnChange}
          />

          <div className={styles.ImagesSection}>
            <label htmlFor='file-upload-logo' className={styles.labelInputFile}>
              <input
                className={styles.inputFile}
                type='file'
                id='file-upload-logo'
                name='firma'
                accept='image/*'
                onChange={handleLogoChange}
              />
              {logoUpload === null
                ? (
                  <div className={styles.addLogo}>
                    <img
                      className={styles.LoadImg}
                      src='../../../../assets/addLogo.svg'
                      // src='/IconLoadlogo.svg'
                      alt='Load icon'
                    />
                    <p className={styles.LoadText}>Agregar logo</p>
                  </div>
                  )
                : (
                  <p className={styles.LoadText}>Logo seleccionado</p>
                  )}
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Localidad</h5>
          <input
            className={styles.textInput}
            id='project-location'
            name='localidad'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Barrio</h5>
          <input
            className={styles.textInput}
            id='project-barrio'
            name='barrio'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Contratista</h5>
          <input
            className={styles.textInput}
            id='project-constratista'
            name='contratista'
            onChange={handleOnChange}
          />
        </div>

        {/* Nuevo div: Tipo de venta */}
        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Tipo de venta</h5>
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
              <input type='radio' name='tipoVenta' value='completo' onChange={handleOnChange} />
              Completo
            </label>
          </div>
        </div>

        {/* Nuevo div: Tipo de construcción */}
        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Tipo de construcción</h5>
          <div className={styles.radioGroup}>
            <label>
              <input
                type='radio' name='tipoConstruccion' value='casa'
                onChange={(e) => {
                  handleOnChange(e)
                  setOtherConstructionType(e.target.checked ? 'casa' : otherConstructionType)
                }}
              />
              Casa
            </label>
            <label>
              <input
                type='radio' name='tipoConstruccion' value='edificio'
                onChange={(e) => {
                  handleOnChange(e)
                  setOtherConstructionType(e.target.checked ? 'edificio' : otherConstructionType)
                }}
              />
              Edificio
            </label>
            <label>
              <input
                type='radio'
                name='tipoConstruccion'
                value='otro'
                onChange={(e) => { handleOnChange(e) }}
              />
              Otro
              <input
                type='text'
                name='otroTipoConstruccion'
                placeholder='Escriba el tipo'
                onChange={(e) => { handleOnChange(e) }}
                style={{ display: (otherConstructionType === 'casa' || otherConstructionType === 'edificio') ? 'none' : 'block' }}
                className={styles.otherInput}
              />

            </label>
          </div>
        </div>

        {/* Nuevo div: Cantidades */}
        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}> Cantidades</h5>

          <div style={{ display: (otherConstructionType === 'edificio') ? 'block' : 'none' }}>
            <div className={styles.flexGroup}>
              <label className={styles.Cantidades}>
                <p>Torres:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numTorres' onChange={handleOnChange} />
              </label>
              <label className={styles.Cantidades}>
                <p>Pisos por torre:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numPisos' onChange={handleOnChange} />
              </label>
              <label className={styles.Cantidades}>
                <p>Apartamentos por piso:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numAptos' onChange={handleOnChange} />
              </label>
            </div>
          </div>

          <div style={{ display: (otherConstructionType === 'casa') ? 'block' : 'none' }}>
            <div className={styles.flexGroup}>
              <label className={styles.Cantidades}>
                <p>Cuadras:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numCuadras' onChange={handleOnChange} />
              </label>
              <label className={styles.Cantidades}>
                <p>Casas por cuadra:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numCasas' onChange={handleOnChange} />
              </label>
            </div>
          </div>

          <div style={{ display: (otherConstructionType === 'casa' || otherConstructionType === 'edificio') ? 'none' : 'block' }}>
            <label className={styles.Cantidades}>
              <p>Construcciones:</p>
              <input type='number' min='0' className={styles.quantityInput} name='numConstrucciones' onChange={handleOnChange} />
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Fecha de inicio</h5>
          <DateInput
            id='project-date'
            name='date'
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.formGroup}>
          <div className={styles.sectionTitle}>
            <h5 className='noMargin'>Fecha estimada finalización</h5>
            <p className='subText'>Solo incluirla si ya se tiene</p>
          </div>
          <DateInput
            id='project-endDate'
            name='endDate'
            onChange={handleOnChange}
          />
        </div>

        <RolesContainer
          onClick={handleToggleChoice}
          chosenTecnicos={chosenTecnicos}
          chosenConexiones={chosenConexiones}
          chosenRedes={chosenRedes}
          chosenComercial={chosenComercial}
        />

      </div>
      <Botones
        onClick={handleSubmit}
        titulo='Añadir proyecto'
        disabled={disableBtn}
      />
    </form>
  )
}
