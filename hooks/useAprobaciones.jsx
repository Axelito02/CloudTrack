import { useEffect, useState } from 'react'
import { db } from '../src/config/firebase'
import { onSnapshot, collection, doc } from 'firebase/firestore'

export const useAprobaciones = (projectId) => {
  const [aprobaciones, setAprobaciones] = useState([])

  useEffect(() => {
    if (!projectId) return

    const projectRef = doc(db, 'documentos', projectId)
    const aprobacionesRef = collection(projectRef, 'Aprobaciones')
    // Función para manejar el snapshot de la colección
    const unsubscribe = onSnapshot(aprobacionesRef, (snapshot) => {
      const updatedAprobaciones = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setAprobaciones(updatedAprobaciones)
    })

    // Limpia el listener cuando el componente se desmonta o cambia
    return () => unsubscribe()
  }, [projectId]) // El segundo argumento [] significa que solo se suscribirá una vez al montar el componente

  return {
    aprobaciones
  }
}
