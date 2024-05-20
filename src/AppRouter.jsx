import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorPage, ProjectsPage, AddProjectPage, ProjectDetailPage, BitacoraCarpetaPage, BitacoraPage, NotaDetailPage, SubmitPage, Notification, ApprovalsPage, Progress, LoginPage, RegisterPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route path='/' element={<ProjectsPage />} />
        <Route path='/crear-proyecto' element={<AddProjectPage />} />
        <Route path='/iniciar-sesion' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/:title/bitacora/:bitacora/:nota' element={<NotaDetailPage />} />
        <Route path='/:title/bitacora/:bitacora/crear-bitacora' element={<SubmitPage />} />
        <Route path='/:title/bitacora/:bitacora' element={<BitacoraPage />} />
        <Route path='/:title/bitacora' element={<BitacoraCarpetaPage />} />
        <Route path='/:title/notificaciones' element={<Notification />} />
        <Route path='/:title/aprobaciones' element={<ApprovalsPage />} />
        <Route path='/:title/progreso' element={<Progress />} />
        <Route path='/:title' element={<ProjectDetailPage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}
