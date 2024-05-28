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
      Swal.fire({
        title: 'Cargando...',
        html: '<div class="loaderWrapper"><div class="loader"></div></div>',
        allowOutsideClick: false,
        showConfirmButton: false
      })

      const projectDocRef = await addDoc(documentosRef, formState)

      // Create sub-collections and add documents
      const bitacoraRef = collection(db, 'documentos', projectDocRef.id, 'Bitacoras')
      const aprobacionesRef = collection(db, 'documentos', projectDocRef.id, 'Aprobaciones')

      const bitacoraEntries = [
        { title: 'Un contratista fue asignado', date: new Date().toISOString(), order: 0 },
        { title: 'Registro de planos', date: new Date().toISOString(), order: 1 },
        { title: 'Inicio de obra', date: new Date().toISOString(), order: 2 },
        { title: 'Construcción en progreso', date: new Date().toISOString(), order: 3 },
        { title: 'Entrega de obra por etapas', date: new Date().toISOString(), order: 4 },
        { title: 'Registrado en OSF', date: new Date().toISOString(), order: 5 },
        { title: 'Legalizado por firma', date: new Date().toISOString(), order: 6 },
        { title: 'Registrado por acta', date: new Date().toISOString(), order: 7 },
        { title: 'Proyecto finalizado', date: new Date().toISOString(), order: 8 }
      ]

      const aprobacionesEntry = {
        checked: false,
        date: new Date().toISOString(),
        description: 'Se ha solicitado la aprobación de contratista desde el departamento de comercial para poder darle pista.',
        rol: 'Comercial',
        title: 'Aceptar la aprobación de contratistas',
        user: 'Laura Sánchez'
      }

      // Add Bitacora documents
      for (const entry of bitacoraEntries) {
        await addDoc(bitacoraRef, entry)
      }

      // Add Aprobaciones document
      await addDoc(aprobacionesRef, aprobacionesEntry)

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
        } else if (
          /* Si se selecciona "Crear otro proyecto" */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          window.location.reload() // Recargar la página actual
        }
      })
    } catch (error) {
      console.error('Error al crear el proyecto:', error)
      Swal.fire({
        title: 'Ha ocurrido un error',
        text: `${error.message}`,
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
