import React from 'react'
import { useUploadForm } from '../../../hooks/useUploadForm'
import styles from './UploadForm.module.css'
import { Botones } from '../botones/Botones'

export function UploadForm ({ projectId }) {
  const {
    disableBtn,
    handleImageChange,
    handleOnChange,
    handleBitacoraSubmit,
    imageUpload
  } = useUploadForm(projectId)

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

        <div className={styles.Checkboxes}>
          {/* Load images */}
          <div className={styles.ImagesSection}>
            {imageUpload === null
              ? (
                <img
                  className={styles.LoadImg}
                      // src='../assets/icons/IconLoadImage.svg'
                  src='/IconLoadImage.svg'
                  alt='Load icon'
                />
                )
              : (
                <h2 className={styles.LoadText}>imagen seleccionada</h2>
                )}
            <label htmlFor='file-upload-icon' className={styles.labelInputFile}>
              <input
                className={styles.inputFile}
                type='file'
                id='file-upload-icon'
                name='images'
                accept='image/*'
                onChange={handleImageChange}
              />
              Subir imágenes
            </label>
            <p className={styles.LoadDescription}>Solo puedes subir una foto</p>
          </div>
        </div>

        <h4>Descripción</h4>
        <textarea
          className={styles.descriptionInput}
          id='project-description'
          name='description'
          rows='4'
          cols='50'
          onChange={handleOnChange}
        />

        <h4>Escribir aqui una Bitacora</h4>
        <textarea
          className={styles.writeBinnacleInput}
          id='project-writeBinnacle'
          name='writeBinnacle'
          rows='4'
          cols='50'
          onChange={handleOnChange}
        />
      </div>

      <Botones onClick={handleBitacoraSubmit} titulo='Subir' disabled={disableBtn} />

    </form>
  )
}
