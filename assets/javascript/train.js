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

  	//console.log("im running")
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
	//console.log("im running")
	//console.log(snapshot)
	snapshot.forEach(function(childSnapshot) {
		console.log(childSnapshot.val())
		var name = childSnapshot.val().name;
		var destination = childSnapshot.val().destination;
		var firstTrainTime= childSnapshot.val().firstTrainTime;
		var frequency= childSnapshot.val().frequency;
		var trainCount = childSnapshot.val().trainCount;
		var nextArrival = childSnapshot.val().nextArrival;
		var minutesAway = childSnapshot.val().minutesAway;

			console.log(name)
			console.log(destination)
			console.log(firstTrainTime)
			console.log(frequency)
			console.log(trainCount)
			console.log(nextArrival)
			console.log(minutesAway)


$("#schedule-table").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" +
nextArrival + "</td><td>" + minutesAway + "</td></tr>");


	
			
		});
	});
});

//De bugging the last part 




	