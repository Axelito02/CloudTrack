import { useEffect, useState } from 'react'
import { db } from '../src/config/firebase'
import { onSnapshot, collection, doc, getDocs } from 'firebase/firestore'

export const useBitacoras = (projectId) => {
  const [bitacoras, setBitacoras] = useState([])

  useEffect(() => {
    if (!projectId) return

    const projectRef = doc(db, 'documentos', projectId)
    const bitacorasRef = collection(projectRef, 'Bitacoras')

    // Función para manejar el snapshot de la colección
    const unsubscribe = onSnapshot(bitacorasRef, async (snapshot) => {
      const bitacorasList = []

      for (const doc of snapshot.docs) {
        const bitacora = { id: doc.id, ...doc.data() }
        const notasRef = collection(db, 'documentos', projectId, 'Bitacoras', doc.id, 'Notas')
        const notasSnapshot = await getDocs(notasRef)
        bitacora.hasNotes = !notasSnapshot.empty
        if (bitacora.hasNotes) {
          const oldestNoteDate = getOldestNoteDate(notasSnapshot)
          bitacora.oldestNoteDate = oldestNoteDate
        }
        bitacorasList.push(bitacora)
      }

      setBitacoras(bitacorasList)
    })

    // Limpia el listener cuando el componente se desmonta o cambia
    return () => unsubscribe()
  }, [projectId]) // El segundo argumento [] significa que solo se suscribirá una vez al montar el componente

  const getOldestNoteDate = (snapshot) => {
    const dates = snapshot.docs.map(doc => new Date(doc.data().date))
    return new Date(Math.min.apply(null, dates))
  }

  return {
    bitacoras
  }
}
