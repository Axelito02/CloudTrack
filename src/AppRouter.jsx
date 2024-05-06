import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, ProjectsPage, AddProjectPage, BitacoraPage, SubmitPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>

        <Route
          path='/'
          element={<HomePage />}
        />

        <Route
          path='/proyectos/crear-proyecto'
          element={<AddProjectPage />}
        />

        <Route
          path='/proyectos'
          element={<ProjectsPage />}
        />

        <Route
          path='/proyectos/:title'
          element={<BitacoraPage />}
        />

        <Route
          path='/proyectos/:title/crear-bitacora'
          element={<SubmitPage />}
        />

        {/* <Route
          path='/*'
          element={<ErrorPage />}
        /> */}

      </Routes>
    </main>
  )
}
