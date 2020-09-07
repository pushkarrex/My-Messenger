import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpRV-IlpEMeZ-jNInt-GnxSG4ICou4VvI",
  authDomain: "my-messenger-pkr.firebaseapp.com",
  databaseURL: "https://my-messenger-pkr.firebaseio.com",
  projectId: "my-messenger-pkr",
  storageBucket: "my-messenger-pkr.appspot.com",
  messagingSenderId: "251749572949",
  appId: "1:251749572949:web:d37d703196e185c269cfdc",
  measurementId: "G-57KZPRB747",
});

const db = firebaseApp.firestore()

export default db;
