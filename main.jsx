import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './src/App.jsx'
// import { CloudTrackContextProvider } from './src/context/CloudTrackContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
