import { useState, useEffect } from 'react'

import { db, storage } from '../src/config/firebase'
import { collection, addDoc, deleteDoc, query, where, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, deleteObject } from 'firebase/storage'

import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const useAddProject = () => {
  const navigate = useNavigate()

  const [logoUpload, setlogoUpload] = useState(null)

  const [chosenTecnicos, setChosenTecnicos] = useState([])
  const [chosenConexiones, setChosenConexiones] = useState([])
  const [chosenRedes, setChosenRedes] = useState([])
  const [chosenComercial, setChosenComercial] = useState([])

  const [formState, setFormState] = useState({
    projectId: '',
    title: '',
    constructora: '',
    localidad: '',
    barrio: '',
    contratista: '',
    tipoVenta: '',
    tipoConstruccion: '',
    date: '',
    endDate: '',
    estado: 0,
    tecnicos: [],
    conexiones: [],
    redes: [],
    comercial: []
  })

  useEffect(() => {
    setFormState({
      ...formState,
      tecnicos: chosenTecnicos,
      conexiones: chosenConexiones,
      redes: chosenRedes,
      comercial: chosenComercial
      // date: new Date().toISOString()
    })
    console.log(formState)
  }, [chosenTecnicos, chosenConexiones, chosenRedes, chosenComercial])

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

  const handleLogoChange = (event) => {
    setlogoUpload(event.target.files[0])
  }

  const handleToggleChoice = (persona, type) => {
    switch (type) {
      case 'Técnicos':
        setChosenTecnicos((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        setFormState({
          ...formState,
          tecnicos: chosenTecnicos
        })
        break
      case 'Conexiones':
        setChosenConexiones((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        setFormState({
          ...formState,
          conexiones: chosenConexiones
        })
        break
      case 'Redes':
        setChosenRedes((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        setFormState({
          ...formState,
          redes: chosenRedes
        })
        break
      case 'Comercial':
        setChosenComercial((prev) =>
          prev.includes(persona) ? prev.filter((item) => item !== persona) : [...prev, persona]
        )
        setFormState({
          ...formState,
          comercial: chosenComercial
        })
        break
      default:
        break
    }
  }

  const disableBtn =
  formState.title.trim() === '' ||
  formState.constructora.trim() === '' ||
  formState.localidad.trim() === '' ||
  formState.barrio.trim() === '' ||
  formState.contratista.trim() === '' ||
  formState.tipoVenta.trim() === '' ||
  formState.tipoConstruccion.trim() === '' ||
  formState.date === ''

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

      const updatedFormState = {
        ...formState,
        tecnicos: chosenTecnicos,
        conexiones: chosenConexiones,
        redes: chosenRedes,
        comercial: chosenComercial
      }

      const tituloLogo = formState.constructora.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + formState.projectId
      const logoRef = ref(storage, `documentosLogos/${tituloLogo}`)
      await uploadBytes(logoRef, logoUpload)

      const projectDocRef = await addDoc(documentosRef, updatedFormState)

      // Create sub-collections and add documents
      const bitacoraRef = collection(db, 'documentos', projectDocRef.id, 'Bitacoras')
      const aprobacionesRef = collection(db, 'documentos', projectDocRef.id, 'Aprobaciones')

      const bitacoraEntries = [
        { title: 'Un contratista fue asignado', description: `El contratista fue asignado por parte de ${formState.constructora}`, order: 0 },
        { title: 'Registro de planos', description: 'Documentación y actualizaciones sobre los planos', order: 1 },
        { title: 'Inicio de obra', description: 'Se inicia oficialmente la construcción del proyecto', order: 2 },
        { title: 'Construcción en progreso', description: 'Encuentra las actualizaciones del avance de la construcción', order: 3 },
        { title: 'Entrega de obra por etapas', description: 'Encuentra las actualizaciones de cada etapa', order: 4 },
        { title: 'Registrado en OSF', description: 'Encuentra el resgistro por OSF', order: 5 },
        { title: 'Legalizado por firma', description: 'Documentos legalizados por la firma correspondiente', order: 6 },
        { title: 'Registrado por acta', description: 'Aquí está el registro formal mediante un acta', order: 7 },
        { title: 'Proyecto finalizado', description: 'Encuentra actualizaciones finales del proyecto', order: 8 }
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

  const handleEraseProject = async (projectId, projectLogo) => {
    console.log(projectLogo)
    const docsRef = collection(db, 'documentos')
    const q = query(docsRef, where('projectId', '==', projectId))

    Swal.fire({
      title: '¿Estás seguro que quieres eliminar el proyecto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
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
          const imageRef = ref(storage, `${projectLogo}`)
          await deleteObject(imageRef)
          console.log('Imagen eliminada:', projectLogo)

          // Eliminar todos los documentos que coinciden con la consulta
          querySnapshot.docs.forEach(async (doc) => {
            await deleteDoc(doc.ref)
          })

          Swal.fire({
            title: 'El proyecto se ha eliminado correctamente',
            icon: 'success',
            iconColor: '#0164FF',
            confirmButtonText: 'Continuar',
            customClass: {
              confirmButton: 'swal-button'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/proyectos')
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
      handleOnChange,
      handleSubmit,
      handleLogoChange,
      logoUpload,
      chosenTecnicos,
      chosenConexiones,
      chosenRedes,
      chosenComercial,
      handleToggleChoice,
      handleEraseProject
    }
  )
}
