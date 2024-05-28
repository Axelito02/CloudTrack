import { useState } from 'react'

import { db, storage } from '../src/config/firebase'
import { collection, addDoc, doc, deleteDoc, query, where, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, deleteObject } from 'firebase/storage'

import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const useUploadForm = (Id) => {
  const navigate = useNavigate()
  const { projectId, bitacoraId } = Id

  const [imageUpload, setimageUpload] = useState(null)

  const [formState, setFormState] = useState({
    notaId: '',
    title: '',
    description: '',
    writeBinnacle: '',
    date: ''
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
      notaId: randomId,
      date: new Date().toISOString()
    })

    console.log(formState)
  }

  const disableBtn =
    formState.title.trim() === '' ||
    formState.description.trim() === '' ||
    (imageUpload === null && formState.writeBinnacle.trim() === '')

  const handleBitacoraSubmit = async (event) => {
    event.preventDefault()
    if (!projectId) {
      console.error('No project ID provided')
      return
    }
    try {
      Swal.fire({
        title: 'Cargando...',
        html: '<div class="loaderWrapper"><div class="loader"></div></div>',
        allowOutsideClick: false,
        showConfirmButton: false
      })
      const tituloImagen = formState.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + formState.notaId

      const imageRef = ref(storage, `documentosImages/${tituloImagen}`)

      const bitacorasRef = collection(db, 'documentos', projectId, 'Bitacoras', bitacoraId, 'Notas')
      await addDoc(bitacorasRef, formState)

      uploadBytes(imageRef, imageUpload).then(() => {
        // window.alert('Subido')
        Swal.fire({
          title: 'Tu bitacora se ha subido',
          text: 'Revisa bitacoras para verlo',
          icon: 'success',
          confirmButtonText: 'Continuar',
          customClass: {
            confirmButton: 'swal-button'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(-1)
          }
        })
      })
    } catch (error) {
      console.log(error)
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

  const handleErase = async (projectId, bitacoraId, notaId, imageName) => {
    console.log(imageName)
    const notasRef = collection(db, 'documentos', projectId, 'Bitacoras', bitacoraId, 'Notas')
    const q = query(notasRef, where('notaId', '==', notaId))

    Swal.fire({
      title: '¿Quieres borrar la nota',
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
            console.log('No se encontró en la base de datos')
            Swal.fire({
              title: 'Ha ocurrido un error',
              text: 'No se encontró en la base de datos',
              icon: 'error',
              confirmButtonText: 'Cerrar',
              customClass: {
                confirmButton: 'swal-button'
              }
            })
            return
          }

          // Borrar la imagen en Storage
          const imageRef = ref(storage, `${imageName}`)
          await deleteObject(imageRef)

          // Borrar cada documento que coincida (debería ser uno solo si bitacoraId es único)
          querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(db, 'documentos', projectId, 'Bitacoras', bitacoraId, 'Notas', document.id))
          })

          Swal.fire({
            title: 'Tu nota se ha eliminado correctamente',
            icon: 'success',
            iconColor: '#0164FF',
            confirmButtonText: 'Continuar',
            customClass: {
              confirmButton: 'swal-button'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(-1)
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
      handleBitacoraSubmit,
      imageUpload,
      handleErase
    }
  )
}
