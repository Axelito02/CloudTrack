import React from 'react'
// import styles from './ProjectsCard.module.css'

export function ProjectCard ({ project, projectImage, onDelete }) {
  const background = {
    backgroundColor: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const projectId = project.projectId
  const imageName = project.title.replace(/\s+/g, '') + project.projectId

  const handleDeleteClick = () => {
    onDelete(projectId, imageName)
  }

  return (
    <div
      className='proyect-card'
      style={background}
    >
      <img src={projectImage} alt={project.title} style={{ width: '40vw', height: 'auto' }} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={handleDeleteClick}>Borrar</button>
    </div>
  )
}
