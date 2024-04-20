import React from 'react'
import './button.css'

function ReloadButton ({ onClick }) {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <button className='reload-button' onClick={handleClick}>Reload</button>
  )
}

export default ReloadButton
