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
    const firstTrain = moment($('#timeInput').val().trim(), "HH:mm").format("HH:mm");
    const frequency = $('#frequencyInput').val().trim();

    let newTrain = {
        name: trainName,
        place: destination,
        ftrain: firstTrain,
        freq: frequency
    }

    db.ref().push(newTrain);
    console.log(newTrain.name);
    
    $('#trainNameInput').val('');
    $('#destinationInput').val('');
    $('#timeInput').val('');
    $('#frequencyInput').val('');

    return false;
});

db.ref().on('child_added', function(snap) {
    console.log(snap.val());
    let trainName = snap.val().name;
    let destination = snap.val().place;
    let firstTrain = snap.val().ftrain;
    let frequency = snap.val().freq;

    let timeConverted = moment(firstTrain, "HH:mm");
    console.log(timeConverted);

    let currentTime = moment().format("HH:mm");
    console.log("Current Time: " + currentTime);

    let timeDiff = moment().diff(moment(timeConverted), "minutes");
    console.log(firstTrain);
    console.log("Difference in Time: " + timeDiff);

    let timeRemainder = timeDiff % frequency;
    console.log(timeRemainder);

    let minTrain = frequency - timeRemainder;

    let nextTrain = moment().add(minTrain, "minutes").format("HH:mm");

    $('#trainScheduleTable').append("<tr><td>" + trainName + "</td><td>" + destination + 
    "</td><td>" + nextTrain);
});

});