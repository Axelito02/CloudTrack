import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorPage, ProjectsPage, ProfilePage, AddProjectPage, ProjectDetailPage, BitacoraCarpetaPage, BitacoraPage, NotaDetailPage, SubmitPage, Notification, ApprovalsPage, Progress, LoginPage, RegisterPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route path='/proyectos' element={<ProjectsPage />} />
        <Route path='/perfil' element={<ProfilePage />} />
        <Route path='/proyectos/crear-proyecto' element={<AddProjectPage />} />
        <Route path='/iniciar-sesion' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/proyectos/:title/bitacora/:bitacora/:nota' element={<NotaDetailPage />} />
        <Route path='/proyectos/:title/bitacora/:bitacora/crear-bitacora' element={<SubmitPage />} />
        <Route path='/proyectos/:title/bitacora/:bitacora' element={<BitacoraPage />} />
        <Route path='/proyectos/:title/bitacora' element={<BitacoraCarpetaPage />} />
        <Route path='/proyectos/:title/notificaciones' element={<Notification />} />
        <Route path='/proyectos/:title/aprobaciones' element={<ApprovalsPage />} />
        <Route path='/proyectos/:title/progreso' element={<Progress />} />
        <Route path='/proyectos/:title' element={<ProjectDetailPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}
