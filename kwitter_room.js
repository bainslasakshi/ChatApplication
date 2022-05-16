
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAs1iWJCdDrwaZWUi39RVa2yvp7Hlasy3c",
      authDomain: "class-test-97f0b.firebaseapp.com",
      databaseURL: "https://class-test-97f0b-default-rtdb.firebaseio.com",
      projectId: "class-test-97f0b",
      storageBucket: "class-test-97f0b.appspot.com",
      messagingSenderId: "224374168947",
      appId: "1:224374168947:web:de79e339d107033fba7906"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
