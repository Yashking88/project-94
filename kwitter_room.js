//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDfu23HVYzcR79-r6ChBV93be1C2-E4Y_A",
    authDomain: "kwitter-d5284.firebaseapp.com",
    databaseURL: "https://kwitter-d5284-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5284",
    storageBucket: "kwitter-d5284.appspot.com",
    messagingSenderId: "342164991252",
    appId: "1:342164991252:web:a3dc9043ccd3659d4be601"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();