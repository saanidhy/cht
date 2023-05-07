n=localStorage.getItem("username");
document.getElementById("name").innerHTML= "Hi! " + n;

const firebaseConfig = {
    apiKey: "AIzaSyDCfvxAhVwfhEZeqzvAS9vNzt87-xfkt4A",
    authDomain: "chat-f12c5.firebaseapp.com",
    databaseURL: "https://chat-f12c5-default-rtdb.firebaseio.com",
    projectId: "chat-f12c5",
    storageBucket: "chat-f12c5.appspot.com",
    messagingSenderId: "353686095923",
    appId: "1:353686095923:web:c00eec8236054242d5fb46"
  };

firebaseConfig.initializeApp(firebaseConfig);

function create(){

  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

  Room_name=document.getElementById("room_name").value;
  localStorage.setItem("room",Room_name);

  firebaseConfig.database().ref("/").child(Room_name).update({
    purpose:"adding room name"
  });
  window.location="kwitter.html";

  list.push(Room_names);
  i=list.join("<br><hr>");
 div="<div>"+i+"</div>";

  document.getElementById("list").innerHTML=div;

  });});}
getData();
}