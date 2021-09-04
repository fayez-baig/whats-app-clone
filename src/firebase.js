import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhQ3WD1wYlPLi1Wk2bXGanCTDCUEkl1pM",
  authDomain: "fayez-whatsapp.firebaseapp.com",
  projectId: "fayez-whatsapp",
  storageBucket: "fayez-whatsapp.appspot.com",
  messagingSenderId: "978090477181",
  appId: "1:978090477181:web:13dfe0e78a18d2ede65314",
  measurementId: "G-G56FTLL4BB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
