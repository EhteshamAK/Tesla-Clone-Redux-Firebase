import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBLU7T4lM-XEDqpiSG8TZBoPtuSxMtiSEA",
    authDomain: "tesla-clone-fea42.firebaseapp.com",
    projectId: "tesla-clone-fea42",
    storageBucket: "tesla-clone-fea42.appspot.com",
    messagingSenderId: "1018116343093",
    appId: "1:1018116343093:web:02b6bf8b0180775914f87c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()

  export { auth }