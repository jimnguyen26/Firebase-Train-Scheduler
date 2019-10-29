$(document).ready(function() {
console.log('welcome');

var firebaseConfig = {
    apiKey: "AIzaSyA_YITdMKw_olmaDEUq99QnHDBycI28xRw",
    authDomain: "train-schedule-e515f.firebaseapp.com",
    databaseURL: "https://train-schedule-e515f.firebaseio.com",
    projectId: "train-schedule-e515f",
    storageBucket: "train-schedule-e515f.appspot.com",
    messagingSenderId: "541661609017",
    appId: "1:541661609017:web:d25b9d7d5233513eb2e1e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  
  
});