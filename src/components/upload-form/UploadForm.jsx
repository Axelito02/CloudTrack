import React, { useState } from 'react'
import { useUploadForm } from '../../../hooks/useUploadForm'
import styles from './UploadForm.module.css'
import { Botones } from '../botones/Botones'

export function UploadForm ({ projectId, bitacoraId }) {
  const {
    disableBtn,
    handleImageChange,
    handleSignChange,
    handleOnChange,
    handleBitacoraSubmit,
    imageUpload,
    signUpload
  } = useUploadForm({ projectId, bitacoraId })

  const [etapaValue, setEtapaValue] = useState('')
  const [titleValue, setTitleValue] = useState('')

  const handleEtapaValueChange = (event) => {
    setEtapaValue(event.target.value)
  }
  const handleTitleValueChange = (event) => {
    setTitleValue(event.target.value)
  }

  function autoResize (textarea) {
    textarea.style.height = '5vh' // Establece la altura a auto para que el navegador calcule la altura necesaria
    textarea.style.height = (textarea.scrollHeight) + 'px' // Establece la altura del textarea según el contenido
  }

  function autoResizeBinnacle (textarea) {
    textarea.style.height = '20vh' // Establece la altura a auto para que el navegador calcule la altura necesaria
    textarea.style.height = (textarea.scrollHeight) + 'px' // Establece la altura del textarea según el contenido
  }

  return (
    <form className={styles.form}>
      <h3 className={styles.formTitle}>Nueva nota</h3>

      <div className={styles.topInputs}>
        <input className={styles.dateInput} name='date' type='datetime-local' onChange={handleOnChange} />
        <div>
          <p className={styles.tagsTitle}>Escriba aquí la información de</p>
          <div className={styles.tags}>
            <div className={styles.tagInput}>
              <label>Pisos</label>
              <input
                type='text'
                id='tagPisos'
                name='pisos'
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.tagInput}>
              <label>Torres</label>
              <input
                className={styles.tagInput}
                type='text'
                id='tagTorres'
                name='torres'
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.tagInput}>
              <label>Aptos</label>
              <input
                className={styles.tagInput}
                type='text'
                id='tagApartamentos'
                name='apartamentos'
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.inputs}>
        <div className={`${styles.inputContainer} ${styles.inputTextContainer} ${etapaValue ? styles.hasContent : ''}`}>
          <input
            className={styles.textInput}
            type='text'
            id='etapa'
            name='etapa'
            onChange={(event) => {
              handleOnChange(event)
              handleEtapaValueChange(event)
            }}
          />
          <label>Etapa</label>
        </div>
        <br />
        <div className={`${styles.inputContainer} ${styles.inputTitleContainer} ${titleValue ? styles.titleHasContent : ''}`}>
          <input
            className={styles.titleInput}
            type='text'
            id='project-title'
            name='title'
            onChange={(event) => {
              handleOnChange(event)
              handleTitleValueChange(event)
            }}
          />
          <label>Título</label>
        </div>

        <div className={styles.formBox}>
          <div className={styles.ImagesBoxes}>
            {/* Load images */}
            <div className={styles.ImagesSection}>
              <label htmlFor='file-upload-image' className={styles.labelInputFile}>
                <input
                  className={styles.inputFile}
                  type='file'
                  id='file-upload-image'
                  name='images'
                  accept='image/*'
                  onChange={handleImageChange}
                />
                {imageUpload === null
                  ? (
                    <>
                      <img
                        className={styles.LoadImg}
                        src='/assets/LoadImage.svg'
                      // src='/IconLoadImage.svg'
                        alt='Load icon'
                      />
                      <p className={styles.LoadText}>Insertar imagen</p>
                    </>
                    )
                  : (
                    <p className={styles.LoadText}>Imagen seleccionada</p>
                    )}
              </label>
            </div>

            <div className={styles.ImagesSection}>
              <label htmlFor='file-upload-sign' className={styles.labelInputFile}>
                <input
                  className={styles.inputFile}
                  type='file'
                  id='file-upload-sign'
                  name='firma'
                  accept='image/*'
                  onChange={handleSignChange}
                />
                {signUpload === null
                  ? (
                    <>
                      <img
                        className={styles.LoadImg}
                        src='/assets/LoadSign.svg'
                      // src='/IconLoadSign.svg'
                        alt='Load icon'
                      />
                      <p className={styles.LoadText}>Insertar firma</p>
                    </>
                    )
                  : (
                    <p className={styles.LoadText}>Firma seleccionada</p>
                    )}
              </label>
            </div>
          </div>

          <textarea
            className={styles.descriptionInput}
            id='project-description'
            name='description'
            placeholder='Escribe aquí una breve descripción de la nota'
            onInput={(e) => autoResize(e.target)}
            onChange={handleOnChange}
          />
          <br />
          <textarea
            className={styles.writeBinnacleInput}
            id='project-writeBinnacle'
            name='writeBinnacle'
            placeholder='Escribe aquí las actualizaciones del proyecto'
            onInput={(e) => autoResizeBinnacle(e.target)}
            onChange={handleOnChange}
          />
          <br />
          <textarea
            className={styles.extraInput}
            id='project-materials'
            name='materials'
            placeholder=' • Escribe información acerca de los materiales'
            onInput={(e) => autoResize(e.target)}
            onChange={handleOnChange}
          /><br />
          <textarea
            className={styles.extraInput}
            id='project-process'
            name='process'
            placeholder=' • Escribe información acerca del proceso'
            onInput={(e) => autoResize(e.target)}
            onChange={handleOnChange}
          /><br />
          <textarea
            className={styles.extraInput}
            id='project-planos'
            name='planos'
            placeholder=' • Escribe información acerca de los planos'
            onInput={(e) => autoResize(e.target)}
            onChange={handleOnChange}
          />
        </div>
      </div>

      <Botones onClick={handleBitacoraSubmit} titulo='Subir' disabled={disableBtn} />

    </form>
  )
}
