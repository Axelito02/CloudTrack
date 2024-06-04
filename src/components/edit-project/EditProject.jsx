import React, { useState } from 'react'
// import { useAddProject } from '../../../hooks/useAddProject'
import styles from './EditProject.module.css'
import { DateRender } from '../dateInput/DateRender'
import { RolesContainer } from '../RolesContainer/RolesContainer'

export function EditProject ({ project }) {
  const [logoUpload, setlogoUpload] = useState(null)
  const handleLogoChange = (event) => {
    setlogoUpload(event.target.files[0])
  }

  const [tipoVenta, setTipoVenta] = useState(project.tipoVenta || '')

  const handleVentaChange = (event) => {
    setTipoVenta(event.target.value)
  }

  const [tipoConstruccion, setTipoConstruccion] = useState(project.tipoConstruccion || '')

  const handleConstructionChange = (event) => {
    setTipoConstruccion(event.target.value)
  }

  const [chosenTecnicos, setChosenTecnicos] = useState(project.tecnicos)
  const [chosenConexiones, setChosenConexiones] = useState(project.conexiones)
  const [chosenRedes, setChosenRedes] = useState(project.redes)
  const [chosenComercial, setChosenComercial] = useState(project.comercial)

  const handleToggleChoice = (persona, type) => {
    switch (type) {
      case 'Técnicos':
        setChosenTecnicos((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        break
      case 'Conexiones':
        setChosenConexiones((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        break
      case 'Redes':
        setChosenRedes((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        break
      case 'Comercial':
        setChosenComercial((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        break
      default:
        break
    }
  }

  console.log(project)

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
            defaultValue={project.title}
          />
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Empresa constructora</h5>
          <input
            className={styles.costructorInput}
            id='project-constructor'
            name='constructora'
            defaultValue={project.constructora}
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
                      src='/assets/addLogo.svg'
                      // src='/IconLoadlogo.svg'
                      alt='Load icon'
                    />
                    <p className={styles.LoadText}>Cambiar logo</p>
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
            defaultValue={project.localidad}
          />
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Barrio</h5>
          <input
            className={styles.textInput}
            id='project-barrio'
            name='barrio'
            defaultValue={project.barrio}
          />
        </div>

        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Contratista</h5>
          <input
            className={styles.textInput}
            id='project-constratista'
            name='contratista'
            defaultValue={project.contratista}
          />
        </div>

        {/* Nuevo div: Tipo de venta */}
        <div className={styles.formGroup}>
          <h5 className={styles.sectionTitle}>Tipo de venta</h5>
          <div className={styles.radioGroup}>
            <label>
              <input type='radio' name='tipoVenta' value='soloInterna' checked={tipoVenta === 'soloInterna'} onChange={handleVentaChange} />
              Solo interna
            </label>
            <label>
              <input type='radio' name='tipoVenta' value='soloCargo' checked={tipoVenta === 'soloCargo'} onChange={handleVentaChange} />
              Solo cargo
            </label>
            <label>
              <input type='radio' name='tipoVenta' value='completo' checked={tipoVenta === 'completo'} onChange={handleVentaChange} />
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
                type='radio' name='tipoConstruccion' value='casa' checked={tipoConstruccion === 'casa'}
                onChange={(e) => {
                  setOtherConstructionType(e.target.checked ? 'casa' : otherConstructionType)
                  handleConstructionChange()
                }}
              />
              Casa
            </label>
            <label>
              <input
                type='radio' name='tipoConstruccion' value='edificio' checked={tipoConstruccion === 'edificio'}
                onChange={(e) => {
                  setOtherConstructionType(e.target.checked ? 'edificio' : otherConstructionType)
                  handleConstructionChange()
                }}
              />
              Edificio
            </label>
            <label>
              <input
                type='radio' name='tipoConstruccion' value='otro' checked={tipoConstruccion === 'otro'}
                onChange={(e) => {
                  setOtherConstructionType(e.target.checked ? 'otro' : otherConstructionType)
                  handleConstructionChange()
                }}
              />
              Otro
              <input
                type='text'
                name='otroTipoConstruccion'
                placeholder='Escriba el tipo'
                defaultValue={project.otroTipoConstruccion}
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
                <input type='number' min='0' className={styles.quantityInput} name='numTorres' defaultValue={project.numTorres} />
              </label>
              <label className={styles.Cantidades}>
                <p>Pisos por torre:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numPisos' defaultValue={project.numPisos} />
              </label>
              <label className={styles.Cantidades}>
                <p>Apartamentos por piso:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numAptos' defaultValue={project.numAptos} />
              </label>
            </div>
          </div>

          <div style={{ display: (otherConstructionType === 'casa') ? 'block' : 'none' }}>
            <div className={styles.flexGroup}>
              <label className={styles.Cantidades}>
                <p>Cuadras:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numCuadras' defaultValue={project.numCuadras} />
              </label>
              <label className={styles.Cantidades}>
                <p>Casas por cuadra:</p>
                <input type='number' min='0' className={styles.quantityInput} name='numCasas' defaultValue={project.numCasas} />
              </label>
            </div>
          </div>

          <div style={{ display: (otherConstructionType === 'casa' || otherConstructionType === 'edificio') ? 'none' : 'block' }}>
            <label className={styles.Cantidades}>
              <p>Construcciones:</p>
              <input type='number' min='0' className={styles.quantityInput} name='numConstrucciones' defaultValue={project.numConstrucciones} />
            </label>
          </div>
        </div>

        <div className={styles.temporalidad}>
          <h4>Temporalidad</h4>
          <p>Período del proyecto</p>
          <div className={styles.periodo}>
            <div className={styles.fechaContainer}>
              <p>Inicio</p>
              <DateRender date={project.date} />
            </div>
            <div className={styles.fechaContainer}>
              <p>Final</p>
              <DateRender date={project.endDate} />
            </div>
          </div>
          <p className={styles.periodoTitle}>Período de tiempo de construcción</p>
          <div className={styles.periodo}>
            <div className={styles.fechaContainer}>
              <p>Inicio</p>
              <DateRender date='' />
            </div>
            <div className={styles.fechaContainer}>
              <p>Final</p>
              <DateRender date='' />
            </div>
          </div>
        </div>

        <RolesContainer
          onClick={handleToggleChoice}
          chosenTecnicos={chosenTecnicos}
          chosenConexiones={chosenConexiones}
          chosenRedes={chosenRedes}
          chosenComercial={chosenComercial}
        />

      </div>
    </form>
  )
}
