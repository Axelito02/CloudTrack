import { useState } from 'react'

export const useApp = () => {
  const [activeLink, setActiveLink] = useState('')

  return { activeLink, setActiveLink }
}
