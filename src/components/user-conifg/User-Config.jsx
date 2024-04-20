import React, { useState, useEffect } from 'react'
import './CatImage.css'

function CatImage () {
  const [isLoading, setIsLoading] = useState(true)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://cataas.com/cat')
      .then(response => {
        setImageUrl(response.url)
        setIsLoading(false)
      })
      .catch(error => console.log('Error fetching cat image:', error))
  }, [])

  return (
    <div>
      {isLoading
        ? (
          <div className='loader' />)
        : (
          <img src={imageUrl} alt='Random Cat' onLoad={() => setIsLoading(false)} />
          )}
    </div>
  )
}

export default CatImage
