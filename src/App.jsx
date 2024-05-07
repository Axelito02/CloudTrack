import React from 'react'
import { AppRouter } from './AppRouter'
import { CloudTrackContextProvider } from './context/CloudTrackContextProvider'

export default function App () {
  return (
    <CloudTrackContextProvider>
      <AppRouter />
    </CloudTrackContextProvider>
  )
}
