import React from 'react'
import { useUplaodForm } from '../../../hooks/useUplaodForm'
import styles from './UplaodForm.module.css'

export function UploadForm () {
  const {
    disableBtn,
    handleImageChange,
    handleOnChange,
    handleSubmit,
    imageUpload
  } = useUplaodForm()

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

        <h4>Descripción*</h4>
        <textarea
          className={styles.descriptionInput}
          id='project-description'
          name='description'
          rows='4'
          cols='50'
          onChange={handleOnChange}
        />
      </div>

      <div className={styles.btn}>
        <button onClick={handleSubmit} disabled={disableBtn}>
          Subir
        </button>
      </div>
    </form>
  )
}
