import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDMvzS-zLhvTyEDO-CtB_nWlU_j7AX_23E",
    authDomain: "legacy-meme.firebaseapp.com",
    databaseURL: "https://legacy-meme-default-rtdb.firebaseio.com",
    projectId: "legacy-meme",
    storageBucket: "legacy-meme.appspot.com",
    messagingSenderId: "144213762891",
    appId: "1:144213762891:web:fe22091e68e7974bbcbece",
    measurementId: "G-1MP7CQY1K0"
}


export const db = !firebase.apps.length
  ? firebase.initializeApp(config).database()
  : firebase.app().database();