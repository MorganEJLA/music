import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBG0F1K6JGjCVIs8GeZU6B1Y7uJ2pFArkk',
  authDomain: 'music-609bb.firebaseapp.com',
  projectId: 'music-609bb',
  storageBucket: 'music-609bb.appspot.com',
  messagingSenderId: '444290921956',
  appId: '1:444290921956:web:cd619f44c4c8b2f5a683f1'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection,storage, }
