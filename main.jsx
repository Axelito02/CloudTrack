import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import './style.css'
import { TaskContextProvider } from './src/context/TaskContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('app')).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
)
