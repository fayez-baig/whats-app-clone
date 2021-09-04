import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1ufCllP99hjqZj_0bXb485yiqzTyUW5I",
  authDomain: "fayez-whats-app.firebaseapp.com",
  projectId: "fayez-whats-app",
  storageBucket: "fayez-whats-app.appspot.com",
  messagingSenderId: "357305722905",
  appId: "1:357305722905:web:068a30396f7645c4756288",
  measurementId: "G-EQKMLY7HYZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
