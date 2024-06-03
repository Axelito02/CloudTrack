import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Navbar, ButtonBack, AddButtonSmall, BitacoraCard } from '../../components'
import { useLastestNote } from '../../../hooks/useLastestNote'
import { useApp } from '../../../hooks/useApp'
import styles from './ProjectDetailPage.module.css'
import DetailProject from '../../components/detail-project/DetailProject'
import RolDetailProject from '../../components/RolDetallesProject/RolDetailProject'

export function ProjectDetailPage () {
  const location = useLocation()
  const project = location.state
  const navigate = useNavigate()
  const { setnavState } = useApp() // Usa el hook useApp para acceder al estado del enlace activo

  const handleNavLinkClick = (path) => {
    setnavState(path) // Actualiza el estado del enlace activo
  }

  const handleDeleteClick = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0164FF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/proyectos')
        Swal.fire(
          'Eliminado',
          'El proyecto ha sido eliminado correctamente',
          'success'
        )} else if (result.dismiss === Swal.DismissReason.cancel) {
          // Si se cancela la eliminación
          Swal.fire({
            icon: 'info',
            title: 'Cancelado',
            text: 'La eliminación del proyecto ha sido cancelada',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false 
        })
        }
    })
  };
  

  const [filter, setFilter] = useState('info')

  if (!project) {
    navigate('/error')
  }

  const {
    latestNote
  } = useLastestNote(project.id)

  console.log(latestNote)

  const displayInfo = filter === 'info' ? styles.showPage : styles.hidePage
  const displayRoles = filter === 'roles' ? styles.showPage : styles.hidePage

  return (
    <div className='mainDiv'>
      <section className='navbar'>
        <Navbar project={project} />
      </section>

      <section className='content'>
        <div className={styles.header}>
          <ButtonBack onClick={() => navigate('/proyectos')} />
          <div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className='noMargin'>{project.constructora}</p>
          </div>
        </div>

        <div className={styles.projectBody}>
          <div className={styles.pageDisplay}>
            <div className={styles.filterContainer}>
              <div className={styles.filter}>
                <label>
                  <input type='radio' value='info' checked={filter === 'info'} onChange={() => setFilter('info')} />
                  Información general
                </label>
              </div>
              <div className={styles.filter}>
                <label>
                  <input type='radio' value='roles' checked={filter === 'roles'} onChange={() => setFilter('roles')} />
                  Roles designados
                </label>
              </div>
            </div>
            <div className={styles.iz}>
            <img onClick={handleDeleteClick} className={styles.icon} src='../../../../assets/trashBtn.svg' />
            <AddButtonSmall onClick={() => navigate('/proyectos/editar-proyecto', { state: { project } })} titulo='Editar proyecto' icon='../../../../assets/EditIcon3.svg' />
            </div>
          </div>

          <div className={displayInfo}>
            <p>Información general</p>
            <DetailProject project={project} />
          </div>

          <div className={displayRoles}>
              <RolDetailProject/>
          </div>

          

          <div className={styles.flex}>
            <div className={styles.temporalidad}>
              <h3>Temporalidad</h3>
              <p>Período del proyecto</p>
            </div>
            <div className={styles.bitacora}>
              <h3>Bitácora</h3>
              {latestNote === null
                ? (
                  <>
                    <div className='loaderWrapper'><div className='loader' /></div>
                  </>
                  )
                : (
                  <BitacoraCard
                    key='preview'
                    nota={latestNote}
                    onClick={() => {
                      handleNavLinkClick('Bitacora')
                      navigate(`/proyectos/${project.title}/bitacora`, { state: project })
                    }}
                  />
                  )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
