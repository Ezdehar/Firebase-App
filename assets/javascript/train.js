$(document).ready(function() {
	//use function above to clean up errors in the rest of the code if there are any
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
  	var firstTrainTime = $("#train-time-input").val().trim();
  	var frequency = $("#time-input").val().trim();


 database.ref('trains').child('train-' + trainCount).push({
    name: name,
    destination: destination,
    time: firstTrainTime,
    frequency: frequency
  		});
	});
      	

	//database.ref('trains').on("value", function(snapshot) {
database.ref('trains').on("child_added", function(snapshot) {
	// a database value has changed
	// take database change and update DOM (because the change could come from anywhere)
	// get database change by using snapshot e.g. snapshot.name
	snapshot.forEach(function(childSnapshot) {

		var name = snapshot.val();
		var destination = snapshot.val();
		var firstTrainTime= snapshot.val();
		var frequency= snapshot.val();
		var trainCount = snapshot.val();

		for (var i = 0; i < name.length; i++) {

			console.log(name)
			console.log(destination)
			console.log(firstTrainTime)
			console.log(frequency)
			console.log(trainCount)

$("#-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");


			}
		});
	});
});
	