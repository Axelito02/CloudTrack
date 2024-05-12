import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, ProjectsPage, AddProjectPage, BitacoraPage, SubmitPage, Notification, Approvals, Progress } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>

        <Route
          path='/'
          element={<ProjectsPage />}
          // element={<HomePage />}
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

        <Route
          path='/notificaciones'
          element={<Notification />}
        />

        <Route
          path='/aprobaciones'
          element={<Approvals />}
        />

        <Route
          path='/progreso'
          element={<Progress />}
        />

        {/* <Route
          path='/*'
          element={<ErrorPage />}
        /> */}

      </Routes>
    </main>
  )
}
