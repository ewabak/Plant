import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDWo5CjGYhk9wlO2n4jlywuuGIikoQQBXo",
    authDomain: "bai-plant-898e9.firebaseapp.com",
    databaseURL: "https://bai-plant-898e9.firebaseio.com",
    projectId: "bai-plant-898e9",
    storageBucket: "bai-plant-898e9.appspot.com",
    messagingSenderId: "73606555056",
    appId: "1:73606555056:web:19d5e53b6fbd61d9"
  };
  // Initialize Firebase
  let app = Firebase.initializeApp(config);
  export const db = app.database();  