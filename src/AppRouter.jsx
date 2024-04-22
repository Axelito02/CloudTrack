import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, SubmitPage, ProjectsPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>

        <Route
          path='/'
          element={<SubmitPage />}
        />

        <Route
          path='/proyectos'
          element={<ProjectsPage />}
        />

        <Route
          path='/homepage'
          element={<HomePage />}
        />

        {/* <Route
          path='/*'
          element={<ErrorPage />}
        /> */}

      </Routes>
    </main>
  )
}
