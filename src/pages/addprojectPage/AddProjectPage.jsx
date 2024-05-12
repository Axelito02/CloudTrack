import React from 'react'
import { AddProject, Botones } from '../../components'
import { useNavigate } from 'react-router-dom'
// import styles from './AddProjectPage.module.css'

export function AddProjectPage () {
  const navigate = useNavigate()
  return (
    <div className='mainDiv'>
      {/* <section className='navbar'>
        <Navbar />
      </section> */}
      <section className='content'>
        {/* <Header /> */}
        <Botones titulo='Volver a proyectos' onClick={() => navigate(-1)} />
        <h1>Crea un nuevo proyecto</h1>
        <AddProject />
        {/* <Footer /> */}
      </section>
    </div>
  )
}
