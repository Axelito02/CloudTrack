import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, ErrorPage, ProjectsPage, ProfilePage, AddProjectPage, EditProjectPage, ProjectDetailPage, BitacoraCarpetaPage, BitacoraPage, NotaDetailPage, SubmitPage, Notification, ApprovalsPage, LoginPage, RegisterPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/iniciar-sesion' element={<LoginPage />} />

        <Route path='/perfil' element={<ProfilePage />} />

        <Route path='/proyectos' element={<ProjectsPage />} />
        <Route path='/proyectos/crear-proyecto' element={<AddProjectPage />} />

        <Route path='/proyectos/:title' element={<ProjectDetailPage />} />
        <Route path='/proyectos/:title/editar-proyecto' element={<EditProjectPage />} />

        <Route path='/proyectos/:title/bitacora' element={<BitacoraCarpetaPage />} />
        <Route path='/proyectos/:title/bitacora/:bitacora' element={<BitacoraPage />} />
        <Route path='/proyectos/:title/bitacora/:bitacora/:nota' element={<NotaDetailPage />} />
        <Route path='/proyectos/:title/bitacora/:bitacora/crear-bitacora' element={<SubmitPage />} />

        <Route path='/proyectos/:title/notificaciones' element={<Notification />} />
        <Route path='/proyectos/:title/aprobaciones' element={<ApprovalsPage />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}
