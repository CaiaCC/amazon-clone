import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9Bl1GLcX-QlNpW_eMDBnCrS02EbX3EPY",
    authDomain: "clone-b271c.firebaseapp.com",
    projectId: "clone-b271c",
    storageBucket: "clone-b271c.appspot.com",
    messagingSenderId: "256323171179",
    appId: "1:256323171179:web:e8243605b9df627006922e",
    measurementId: "G-16NKJ2C4H7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
