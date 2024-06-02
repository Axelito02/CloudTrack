import { useEffect, useState } from 'react'
import { db } from '../src/config/firebase'
import { getDocs, collection, query, orderBy, limit } from 'firebase/firestore'
import { useBitacoras } from './useBitacoras'

export const useLastestNote = (projectId) => {
  const { bitacoras } = useBitacoras(projectId)
  const [latestNote, setLatestNote] = useState(null)

  useEffect(() => {
    const fetchLatestNote = async () => {
      try {
        // Option 1: Reduce Firestore Calls (if hasNotes is reliable)
        const bitacorasWithNotes = bitacoras.filter(bitacora => bitacora.hasNotes)

        if (bitacorasWithNotes.length) {
          const promises = bitacorasWithNotes.map(async (bitacora) => {
            const notasRef = collection(db, 'documentos', projectId, 'Bitacoras', bitacora.id, 'Notas')
            const notasSnapshot = await getDocs(query(notasRef, orderBy('date', 'desc'), limit(1)))
            return notasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          })

          const allNotes = await Promise.all(promises)
          const notes = allNotes.flat()
          const latestNoteInfo = notes.reduce((latest, note) => {
            const noteDate = new Date(note.date)
            return (!latest || noteDate > new Date(latest.date)) ? note : latest
          }, null)
          setLatestNote(latestNoteInfo)
        }
      } catch (error) {
        console.error('Error fetching latest note: ', error)
      }
    }

    fetchLatestNote()
  }, [bitacoras, projectId])

  return {
    latestNote
  }
}
