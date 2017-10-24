import { databaseRef, firebaseAuth } from 'config/constants'
import firebase from 'firebase'


export default function auth() {
  return firebaseAuth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

export function checkIfAuthed (store) {
  return store.getState().users.get('isAuthed')
}

export function logout () {
  return firebaseAuth().signOut()
}

export function saveUser (user) {
  return databaseRef.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
