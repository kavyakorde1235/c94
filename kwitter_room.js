
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA9x_bBvc3J8RN535Pdf1_2N2bKSbfbXq8",
      authDomain: "kwitter-6b426.firebaseapp.com",
      databaseURL: "https://kwitter-6b426-default-rtdb.firebaseio.com",
      projectId: "kwitter-6b426",
      storageBucket: "kwitter-6b426.appspot.com",
      messagingSenderId: "279272845265",
      appId: "1:279272845265:web:3d1dd316e6c8026a137af0",
      measurementId: "G-RLT8VEKD06"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room" });
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");
      window.location = "index.html";

}