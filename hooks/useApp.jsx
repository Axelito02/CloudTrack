import { CloudTrackContext } from '../src/context/CloudTrackContext'
import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

export const useApp = () => {
  const context = useContext(CloudTrackContext)
  const location = useLocation()

  if (!context) {
    throw new Error('This component sould be within a TodoContextrovider Component')
  }

  const { navState, setnavState } = context

  useEffect(() => {
    window.localStorage.setItem('navState', JSON.stringify(navState))
  }, [navState]
  )

  useEffect(() => {
    if (location.pathname === '/proyectos') {
      setnavState('Proyecto')
    }
  }, [location.pathname, setnavState])

  return { navState, setnavState }
}
