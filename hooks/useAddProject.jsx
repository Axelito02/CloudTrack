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
    endDate: '',
    localidad: '',
    barrio: '',
    contratista: '',
    estado: 0
  })

  const handleOnChange = ({ target }) => {
    const { name, value } = target

    const randomId = uuidv4()

    setFormState({
      ...formState,
      [name]: value,
      projectId: randomId
      // date: new Date().toISOString()
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
        iconColor: '#0164FF',
        confirmButtonText: 'Ir a proyectos',
        showCancelButton: true,
        cancelButtonText: 'Crear otro proyecto',
        customClass: {
          confirmButton: 'swal-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/proyectos')
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
