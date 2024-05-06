import { useEffect, useState } from 'react'
import { db, storage } from '../src/config/firebase'
import { onSnapshot, collection, doc } from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useBitacoras = (projectId) => {
  const [bitacoras, setBitacoras] = useState([])

  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, 'documentosImages/')

  useEffect(() => {
    if (!projectId) return

    const projectRef = doc(db, 'documentos', projectId)
    const bitacorasRef = collection(projectRef, 'Bitacoras')
    // Función para manejar el snapshot de la colección
    const unsubscribe = onSnapshot(bitacorasRef, (snapshot) => {
      const updatedBitacoras = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setBitacoras(updatedBitacoras)
    })

    // Limpia el listener cuando el componente se desmonta o cambia
    return () => unsubscribe()
  }, [projectId]) // El segundo argumento [] significa que solo se suscribirá una vez al montar el componente

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, [projectId])

  return {
    bitacoras,
    imageList
  }
}
