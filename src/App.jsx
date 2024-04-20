import React from 'react'
import { TaskContextProvider } from './context/TaskContextProvider'
import CatCard from './components/cat-card/Cat-Card'

export default function App () {
  return (
    <TaskContextProvider>
      <AppContent />
    </TaskContextProvider>
  )
}

function AppContent () {
  console.log('Rendering AppContent...')
  return <CatCard />
}
