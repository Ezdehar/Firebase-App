$(document).ready(function() {
var config = {
    apiKey: "AIzaSyAyxVUBQLGOcuEBRC2RSd_W9BrTD8-dJeU",
    authDomain: "train-schedule-a4e86.firebaseapp.com",
    databaseURL: "https://train-schedule-a4e86.firebaseio.com",
    projectId: "train-schedule-a4e86",
    storageBucket: "train-schedule-a4e86.appspot.com",
    messagingSenderId: "777272304615"
  };
  firebase.initializeApp(config);

  var database = firebase.database(); 

	var name= "";
  	var destination= "";
  	var firstTrainTime= "";
  	var frequency= "";
  	var trainCount = 0;

 $("#submit-add").on("click", function(event) {
  	// someone has submitted info via the form in the html
  	// here, need to update the database
  	event.preventDefault();

  	trainCount++;

	var name = $("#name-input").val().trim();
  	var destination = $("#destination-input").val().trim();
  	var firstTrainTime = $("#train-time-input").val();
  	var frequency = $("#time-input").val().trim();

  	database.ref('trains').child('train-' + trainCount).push({
        name: name,
        destination: destination,
        time: firstTrainTime,
        frequency: frequency
  	});
});
      	
database.ref('trains').on("value", function(snapshot) {

	// a database value has changed
	// take database change and update DOM (because the change could come from anywhere)
	// get database change by using snapshot e.g. snapshot.name
	snapshot.forEach(function(childSnapshot) {
	 for (var i = 0; i < nums.length; i++) {
       {
          console.log("");
        }

	var name = snapshot.child("name").val; 
  	var destination = snapshot.child("destination")
  	var firstTrainTime = snapshot.child("firstTrainTime")
  	var frequency = snapshot.child("frequency")

	// update DOM with those variables
	$("#train-name-input").val("");
	$("#destination-input").val("");
	$("#train-time-input").val("");
	$("#time-input").val("");
	};

// var randomDate = "03/17/2018";
// var randomFormat = "MM/DD/YYYY";
// var convertedDate = moment(randomDate, randomFormat);

// console.log(moment(convertedDate).format("MM/DD/YY"));
// console.log(moment(convertedDate).format("MMM Do, YYYY hh:mm:ss"));
// console.log(moment(convertedDate).format("X"));
// console.log("----------------------------------------");

// console.log(moment(convertedDate).toNow());
// console.log(moment(convertedDate).diff(moment(), "years"));
// console.log(moment(convertedDate).diff(moment(), "months"));
// console.log(moment(convertedDate).diff(moment(), "days"));
// console.log("----------------------------------------");

// var newDate = moment("03/31/2018", randomFormat);
// console.log(moment(convertedDate).diff(moment(newDate), "days"));

// console.log(moment(convertedDate).format("X"));
// console.log("----------------------------------------");

// console.log(moment(convertedDate).format("DDD"));
// console.log(moment(convertedDate).format("dddd"));


