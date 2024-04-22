import { useEffect, useState } from 'react'
import { db, storage } from '../src/config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const documentosRef = collection(db, 'documentos')

  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, 'documentosImages/')

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await getDocs(documentosRef)

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        console.log(filteredData)
        setProjects(filteredData)

        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageList((prev) => [...prev, url])
            })
          })
        })
      } catch (error) {
        console.error(error)
      }
    }

    getProjects()
  }, [])

  console.log(imageList)

  return (
    {
      projects,
      imageList
    }
  )
}
