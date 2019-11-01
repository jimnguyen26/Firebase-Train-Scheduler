$(document).ready(function() {
console.log('welcome');

const firebaseConfig = {
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

const db = firebase.database();

$('#submitBtn').on('click', function() {
    const trainName = $('#trainNameInput').val().trim();
    const destination = $('#destinationInput').val().trim();

    var newTrain = {
        name: trainName,
        place: destination,
    }

    db.ref().push(newTrain);
    console.log(newTrain.name);
    
    $('#trainNameInput').val('');
    $('#destinationInput').val('');

    return false;

});

db.ref().on('child_added', function(snap) {
    console.log(snap.val());
    var trainName = snap.val().name;
    var destination = snap.val().place;

    $('#trainScheduleTable').append("<tr><td>" + trainName);
});

});