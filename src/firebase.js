import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsiwGs0HjeK7gldFEDN6dsPzKTg0bwwx4",
  authDomain: "eating-disorder-dc3ce.firebaseapp.com",
  databaseURL: "https://eating-disorder-dc3ce-default-rtdb.firebaseio.com",
  projectId: "eating-disorder-dc3ce",
  storageBucket: "eating-disorder-dc3ce.appspot.com",
  messagingSenderId: "380049260932",
  appId: "1:380049260932:web:59078bf0a0fe8258ff1dd1",
  measurementId: "G-9ZFVP6YNPT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;