import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD3mZGs6S9iLRgS6XZNu6Rq8NRGPhjeFDA",
    authDomain: "catalogoms-302ec.firebaseapp.com",
    databaseURL: "https://catalogoms-302ec.firebaseio.com",
    projectId: "catalogoms-302ec",
    storageBucket: "catalogoms-302ec.appspot.com",
    messagingSenderId: "403875340437",
    appId: "1:403875340437:web:2be76de6e0473948497b9c",
    measurementId: "G-94Y5P3BLFP"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;