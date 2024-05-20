import React, { useState } from 'react'
import { CloudTrackContext } from './CloudTrackContext'

export function CloudTrackContextProvider ({ children }) {
  // const initNavState = JSON.parse(window.localStorage.getItem('navState')) ?? []
  const initNavState = 'Proyecto'
  const [navState, setnavState] = useState(initNavState)

  return (
    <CloudTrackContext.Provider value={{ navState, setnavState }}>
      {children}
    </CloudTrackContext.Provider>
  )
}
