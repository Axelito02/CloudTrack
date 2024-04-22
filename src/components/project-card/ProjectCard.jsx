import React, { useState } from 'react';
import styles from './ProjectCard.module.css'; // CSS Modules

export function ProjectCard({ project, projectImage, onDelete }) {
  const [isLoading, setIsLoading] = useState(true);

  const projectId = project.projectId;
  const imageName = project.title.replace(/\s+/g, '') + project.projectId;

  const handleDeleteClick = () => {
    onDelete(projectId, imageName);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.error('Error al cargar la imagen');
  };

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCard}>
        {isLoading && <div className={styles.loader}></div>} {/* Muestra el loader mientras carga */}
        <img
          src={projectImage}
          alt={project.title}
          style={{ width: '40vw', height: 'auto', display: isLoading ? 'none' : 'block' }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button className={styles.button} onClick={handleDeleteClick}>
          Borrar
        </button>
      </div>
    </div>
  );
}
