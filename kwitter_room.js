var firebaseConfig = {
    apiKey: "AIzaSyArZIthQ6_clc9th04PhUqdpUeMgssQtoY",
    authDomain: "practie-test.firebaseapp.com",
    databaseURL: "https://practie-test-default-rtdb.firebaseio.com",
    projectId: "practie-test",
    storageBucket: "practie-test.appspot.com",
    messagingSenderId: "48821441941",
    appId: "1:48821441941:web:82ca2acdb5f0a21659d29c"
};

//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!"

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + room_name);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            console.log(firebase_massage_id);
            console.log(message_data);
            name = massage_data['name'];
            massage_data['massage'];
            like = massage_data['like'];
            name_with_tag = "<h4>" + name + "</h4>"
            massage_with_tag = "<h4 class='massage_h4'>" + massage + "</h4>";
            like_button = "<button class= 'btn btn-warning'id=" + firebase_massage_id + " value" + like + " onclick=' updatelike(this.id)'>like :" + like + "<button></button>"


            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}