import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditProject, ButtonBack, Navbar, Botones } from '../../components'
import styles from './EditProject.module.css'
import Swal from 'sweetalert2'

export function EditProjectPage () {
  const location = useLocation()
  const { project } = location.state
  const navigate = useNavigate()

  let initialStatusValue = ''
  let initialStatusClass = ''

  if (project.estado === 0) {
    initialStatusValue = 'pendiente'
    initialStatusClass = styles.pendiente
  } else if (project.estado === 1) {
    initialStatusValue = 'progreso'
    initialStatusClass = styles.progreso
  } else if (project.estado === 2) {
    initialStatusValue = 'completo'
    initialStatusClass = styles.completo
  }

  const [status, setStatus] = useState(initialStatusValue)
  const [statusClass, setStatusClass] = useState(initialStatusClass)

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
    console.log(status)
  }

  useEffect(() => {
    if (status === 'pendiente') {
      setStatusClass(styles.pendiente)
    } else if (status === 'progreso') {
      setStatusClass(styles.progreso)
    } else if (status === 'completo') {
      setStatusClass(styles.completo)
    }
  }, [status])

  const handleUpated = () => {
    Swal.fire({
      title: 'Tu proyecto ha sido actualizado',
      icon: 'success',
      iconColor: '#0164FF',
      confirmButtonText: 'Ir a proyectos'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1)
      }
    })
  }

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.header}>
          <ButtonBack onClick={() => navigate(-1)} />
          <h1 className={styles.title}>Editar Proyecto</h1>
        </div>
        <div className={styles.orangeRectangle}>
          <h4>Estado construcción </h4>
          <div className={`${styles.iconTextContainer} ${statusClass}`}>
            <select className={styles.estadoSelect} defaultValue={status} onChange={handleStatusChange}>
              <option value='pendiente'>Pendiente</option>
              <option value='progreso'>En progreso</option>
              <option value='completo'>Completo</option>
            </select>
          </div>
        </div>
        <EditProject project={project} />
        <div className={styles.update}>
          <Botones
            titulo='Actualizar proyecto'
            onClick={handleUpated}
          />
        </div>
      </section>
    </div>
  )
}

export default EditProject
