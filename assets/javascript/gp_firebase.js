// Initialize Firebase
var config = {
    apiKey: "AIzaSyDohsc-Pi_H2B51hXJq1nia2YwRvC8feqM",
    authDomain: "guzzlepuzzle-d8507.firebaseapp.com",
    databaseURL: "https://guzzlepuzzle-d8507.firebaseio.com",
    projectId: "guzzlepuzzle-d8507",
    storageBucket: "guzzlepuzzle-d8507.appspot.com",
    messagingSenderId: "859175233858"

  };
  firebase.initializeApp(config);

// Sign in user anonymously to Firebase
firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
        console.error(error);
})

// Listener for Firebase login and save userID locally for later database writes
firebase.auth().onAuthStateChanged(function(user) {
    if (user)   {    
    var uid = user.uid;
        console.log(uid);
    localStorage.setItem("gpfuid", uid)
}});
     
var database = firebase.database();
var fuid = localStorage.getItem("gpfuid");

// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// Every time the client's connection state changes (connected=true disconnected=false) the boolean value will be updated
var connectedRef = database.ref(".info/connected");
connectedRef.on("value", function(snap) {

    // If they are connected..
    if (snap.val()) {
  
      // Add user to the connections list.
      var conn = connectionsRef.push(true);
      // Remove user from the connection list when they disconnect.
      conn.onDisconnect().remove();
    }
  });
  
  // When first loaded or when the connections list changes...
  connectionsRef.on("value", function(snap) {
  
    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#connected-viewers").text(snap.numChildren());
  });
 
 
// Not sure yet if a logout is going to be used/needed but keeping code for now
// function logOut();
//     firebase.auth().signOut();
//     $(#quit).on("click", function(logOut));
 