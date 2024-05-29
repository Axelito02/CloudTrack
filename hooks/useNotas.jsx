import { useEffect, useState } from 'react'
import { db, storage } from '../src/config/firebase'
import { onSnapshot, collection, doc } from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useNotas = (Id) => {
  const { projectId, bitacoraId } = Id

  const [notas, setNotas] = useState([])

  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, 'documentosImages/')

  const [firmaList, setFirmaList] = useState([])
  const firmaListRef = ref(storage, 'documentosFirmas/')

  useEffect(() => {
    if (!projectId || !bitacoraId) return

    const projectRef = doc(db, 'documentos', projectId)
    const notasRef = collection(projectRef, 'Bitacoras', bitacoraId, 'Notas')
    // const notasRef = collection(bitacorasRef, 'Notas')

    // Función para manejar el snapshot de la colección
    const unsubscribe = onSnapshot(notasRef, (snapshot) => {
      const updatedNotas = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotas(updatedNotas)
    })

    // Limpia el listener cuando el componente se desmonta o cambia
    return () => unsubscribe()
  }, [bitacoraId]) // El segundo argumento [] significa que solo se suscribirá una vez al montar el componente

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
    listAll(firmaListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFirmaList((prev) => [...prev, url])
        })
      })
    })
  }, [bitacoraId])

  return {
    notas,
    imageList,
    firmaList
  }
}
