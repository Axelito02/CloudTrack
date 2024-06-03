import { useEffect, useState } from 'react'
import { db, storage } from '../src/config/firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const documentosRef = collection(db, 'documentos')

  const [logoList, setLogoList] = useState([])
  const logoListRef = ref(storage, 'documentosLogos/')

  useEffect(() => {
    // Función para manejar el snapshot de la colección
    const unsubscribe = onSnapshot(documentosRef, (snapshot) => {
      const updatedProjects = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setProjects(updatedProjects)
    })

    // Limpia el listener cuando el componente se desmonta o cambia
    return () => unsubscribe()
  }, []) // El segundo argumento [] significa que solo se suscribirá una vez al montar el componente

  useEffect(() => {
    listAll(logoListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setLogoList((prev) => [...prev, url])
        })
      })
    })
  }, [])

  return {
    projects,
    logoList
  }
}
