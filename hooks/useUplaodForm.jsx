import { useState } from 'react'

import { db, storage } from '../src/config/firebase'
import { collection, addDoc, doc, deleteDoc, query, where, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, deleteObject } from 'firebase/storage'

import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

export const useUplaodForm = () => {
  const [imageUpload, setimageUpload] = useState(null)

  const [formState, setFormState] = useState({
    projectId: '',
    title: '',
    description: '',
    constructor: '',
    writeBinnacle: ''
  })

  const handleImageChange = (event) => {
    setimageUpload(event.target.files[0])
  }

  const handleOnChange = ({ target }) => {
    const { name, value } = target

    const randomId = uuidv4()

    setFormState({
      ...formState,
      [name]: value,
      projectId: randomId
    })

    console.log(formState)
  }

  const disableBtn =
    formState.title.trim() === '' ||
    formState.description.trim() === '' ||
    formState.constructor.trim() === '' ||
    (imageUpload === null && formState.writeBinnacle.trim() === '')

  const documentosRef = collection(db, 'documentos')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const tituloImagen = formState.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + formState.projectId

      const imageRef = ref(storage, `documentosImages/${tituloImagen}`)
      uploadBytes(imageRef, imageUpload).then(() => {
        // window.alert('Subido')
        Swal.fire({
          title: 'Tu proyecto se ha subido',
          text: 'Revisa proyectos para verlo',
          icon: 'success',
          confirmButtonText: 'Continuar',
          customClass: {
            confirmButton: 'swal-button'
          }
        })
      })

      await addDoc(documentosRef, formState)
    } catch (error) {
      // window.alert('Chale')
      Swal.fire({
        title: 'Ha ocurrido un error',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
          confirmButton: 'swal-button'
        }
      })
    }
  }

  const handleErase = async (projectId, imageName) => {
    const documentosRef = collection(db, 'documentos')
    const q = query(documentosRef, where('projectId', '==', projectId))

    Swal.fire({
      title: '¿Quieres borrar la bítacora',
      text: 'Si lo haces no podrá ser recuperada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero borrarla',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const querySnapshot = await getDocs(q)
          if (querySnapshot.empty) {
            console.log('No matching documents.')
            return
          }

          // Borrar la imagen en Storage
          const imageRef = ref(storage, `documentosImages/${imageName}`)
          await deleteObject(imageRef)

          // Borrar cada documento que coincida (debería ser uno solo si projectId es único)
          querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(db, 'documentos', document.id))
          })

          Swal.fire({
            title: 'Tu proyecto se ha eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Continuar',
            customClass: {
              confirmButton: 'swal-button'
            }
          })
        } catch (error) {
          console.error('Error al borrar:', error)
          Swal.fire({
            title: 'Ha ocurrido un error',
            text: `${error}`,
            icon: 'error',
            confirmButtonText: 'Cerrar',
            customClass: {
              confirmButton: 'swal-button'
            }
          })
        }
      }
    })
  }

  return (
    {
      disableBtn,
      handleImageChange,
      handleOnChange,
      handleSubmit,
      imageUpload,
      handleErase
    }
  )
}
