import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaBVpRthClDBT3k8ozllOH2Ij7F4JOWa0",
  authDomain: "chimex-hospital.firebaseapp.com",
  projectId: "chimex-hospital",
  storageBucket: "chimex-hospital.firebasestorage.app",
  messagingSenderId: "334039892635",
  appId: "1:334039892635:web:c25aef6a578c68f7ad7c3e"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
