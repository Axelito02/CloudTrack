import { useState } from 'react'

import { db } from '../src/config/firebase'
import { collection, addDoc } from 'firebase/firestore'

import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const useAddProject = () => {
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    projectId: '',
    title: '',
    constructora: '',
    date: '',
    hour: ''
  })

  const handleOnChange = ({ target }) => {
    const { name, value } = target

    const randomId = uuidv4()
    const uploadDate = new Date()
    const day = uploadDate.getDate().toString().padStart(2, '0')
    const month = (uploadDate.getMonth() + 1).toString().padStart(2, '0') // Meses son desde 0
    const year = uploadDate.getFullYear()
    const hours = uploadDate.getHours().toString().padStart(2, '0')
    const minutes = uploadDate.getMinutes().toString().padStart(2, '0')

    setFormState({
      ...formState,
      [name]: value,
      projectId: randomId,
      date: `${day}/${month}/${year}`,
      hour: `${hours}:${minutes}`
    })

    console.log(formState)
  }

  const disableBtn =
    formState.title.trim() === '' ||
    formState.constructora.trim() === ''

  const documentosRef = collection(db, 'documentos')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await addDoc(documentosRef, formState)
      Swal.fire({
        title: 'Tu proyecto ha sido creado',
        text: 'Revisa proyectos para verlo y añadir bítacoras',
        icon: 'success',
        confirmButtonText: 'Ir a proyectos',
        showCancelButton: true,
        cancelButtonText: 'Crear otro proyecto',
        customClass: {
          confirmButton: 'swal-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/Proyectos')
        }
      })
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

  return (
    {
      disableBtn,
      handleOnChange,
      handleSubmit
    }
  )
}
