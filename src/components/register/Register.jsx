import React, { useState, useEffect } from 'react'

function CatFacts ({ onFactChange }) {
  const [fact, setFact] = useState('')

  useEffect(() => {
    if (!fact) {
      fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
          setFact(data.fact)
          const firstFourWords = data.fact.split(' ').slice(0, 4).join(' ') + '...'
          onFactChange(firstFourWords)
        })
        .catch(error => console.log('Error fetching cat fact:', error))
    }
  }, [fact, onFactChange])

  return (
    <div>
      <p>{fact}</p>
    </div>
  )
}

export default CatFacts
