import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-G76TD1Fm46dEmZAqSibM1Oq2b6F1cIA",
  authDomain: "fir-crud-7150b.firebaseapp.com",
  projectId: "fir-crud-7150b",
  storageBucket: "fir-crud-7150b.appspot.com",
  messagingSenderId: "658386576698",
  appId: "1:658386576698:web:1e8293832fdf88d9c35c03"
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();