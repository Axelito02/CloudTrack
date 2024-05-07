import React from 'react'
import { AppRouter } from './AppRouter'
import { CloudTrackContextProvider } from './context/CloudTrackContextProvider'
import { Navbar } from './components'

export default function App () {
  return (
    <CloudTrackContextProvider>
        <AppRouter />
    </CloudTrackContextProvider>
  )
}
