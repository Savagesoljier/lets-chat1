var firebaseConfig = {
      apiKey: "AIzaSyBTO0Qdk3Z46q2QlNfPXjLUfPfcYFIZhas",
      authDomain: "kwitterwastaken.firebaseapp.com",
      databaseURL: "https://kwitterwastaken-default-rtdb.firebaseio.com",
      projectId: "kwitterwastaken",
      storageBucket: "kwitterwastaken.appspot.com",
      messagingSenderId: "305436925308",
      appId: "1:305436925308:web:254d4a2d265b11c956d8f9",
      measurementId: "G-4JTJ1KY1MF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
