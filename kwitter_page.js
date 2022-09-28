//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("user_item");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = ""
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kiwtter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}