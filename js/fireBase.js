
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	var firebaseConfig = {
		apiKey: "AIzaSyCOypiX0n7RWgl8oMThWZOCYDRJT8ZzBYc",
		authDomain: "cads27.firebaseapp.com",
		databaseURL: "https://cads27-default-rtdb.firebaseio.com",
		projectId: "cads27",
		storageBucket: "cads27.appspot.com",
		messagingSenderId: "833899063067",
		appId: "1:833899063067:web:41d911a5aa3e4ec30d55be",
		measurementId: "G-TQ20FWNBVR"
	};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
