import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDlIkFmEZQBmmZN29_m8ixFPZp_2LF_PBM',
  authDomain: 'cloudtrack-3593d.firebaseapp.com',
  projectId: 'cloudtrack-3593d',
  storageBucket: 'cloudtrack-3593d.appspot.com',
  messagingSenderId: '685737624736',
  appId: '1:685737624736:web:61e0b01b0f523e866375c5'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const db = getFirestore(app)
export const storage = getStorage(app)
