// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDADlzYSp3yJfh53YnJDAlq3gQfc28Iw7M",
  authDomain: "tik-tok-clone-e1828.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-e1828.firebaseio.com",
  projectId: "tik-tok-clone-e1828",
  storageBucket: "tik-tok-clone-e1828.appspot.com",
  messagingSenderId: "1044878935298",
  appId: "1:1044878935298:web:3aa06e369e3f34aa17ee1b",
  measurementId: "G-9PYF6E3L0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;