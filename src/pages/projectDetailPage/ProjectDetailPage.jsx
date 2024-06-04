import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Navbar, ButtonBack, AddButtonSmall } from '../../components'
import styles from './ProjectDetailPage.module.css'
import DetailProject from '../../components/detail-project/DetailProject'
import RolDetailProject from '../../components/RolDetallesProject/RolDetailProject'
import { useAddProject } from '../../../hooks/useAddProject'
import { useProjects } from '../../../hooks/useProjects'

export function ProjectDetailPage () {
  const location = useLocation()
  const project = location.state
  const navigate = useNavigate()

  const projectId = project.projectId

  const { logoList } = useProjects()
  const tituloLogo = project.constructora.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '') + projectId
  const projectLogo = logoList.find((img) => img.includes(tituloLogo))

  const {
    handleEraseProject
  } = useAddProject(projectId)

  const handleDeleteProject = () => {
    handleEraseProject(projectId, projectLogo)
  }

  const [filter, setFilter] = useState('info')

  if (!project) {
    navigate('/error')
  }

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
              <img onClick={handleDeleteProject} className={styles.icon} src='../../../../assets/trashBtn.svg' />
              <AddButtonSmall onClick={() => navigate(`/proyectos/${project.title}/editar-proyecto`, { state: { project } })} titulo='Editar proyecto' icon='../../../../assets/EditIcon3.svg' />
            </div>
          </div>

          <div className={displayInfo}>
            <p>Información general</p>
            <DetailProject project={project} />
          </div>

          <div className={displayRoles}>
            <RolDetailProject project={project} />
          </div>
        </div>
      </section>
    </div>
  )
}
