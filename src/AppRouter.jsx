import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorPage, ProjectsPage, AddProjectPage, ProjectDetailPage, BitacoraPage, SubmitPage, Notification, ApprovalsPage, Progress, LoginPage, RegisterPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>

        <Route
          path='/'
          element={<ProjectsPage />}
        />

        <Route
          path='/crear-proyecto'
          element={<AddProjectPage />}
        />

        <Route
          path='/:title'
          element={<ProjectDetailPage />}
        />

        <Route
          path='/:title/bitacora'
          element={<BitacoraPage />}
        />

        <Route
          path='/:title/bitacora/crear-bitacora'
          element={<SubmitPage />}
        />

        <Route
          path='/:title/notificaciones'
          element={<Notification />}
        />

        <Route
          path='/:title/aprobaciones'
          element={<ApprovalsPage />}
        />

        <Route
          path='/:title/progreso'
          element={<Progress />}
        />

        <Route
          path='/iniciar-sesion'
          element={<LoginPage />}
        />

        <Route
          path='/registro'
          element={<RegisterPage />}
        />

        <Route
          path='/*'
          element={<ErrorPage />}
        />

      </Routes>
    </main>
  )
}
