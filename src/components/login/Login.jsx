import React, { useState } from 'react'
import './CatCard.css'
import CatImage from '../cat-image/Cat-Image'
import ReloadButton from '../reload-button/button'
import CatFacts from '../cat-fact/Cat-Fact'

function CatCard () {
  const [preview, setPreview] = useState('')

  const handleFactChange = (preview) => {
    setPreview(preview)
  }

  return (
    <div className='cat-card'>
      <div className='cat-card-content'>
        <CatImage />
        <div className='fact-preview'>{preview}</div>
        <CatFacts onFactChange={handleFactChange} />
        <ReloadButton />
      </div>
    </div>
  )
}

export default CatCard
