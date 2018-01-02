// Initialize Jason's Firebase
var config = {
    apiKey: "AIzaSyDywo8of7_TlZKH_SlysnkRIJlyHSBUds0",
    authDomain: "guzzle-puzzle.firebaseapp.com",
    databaseURL: "https://guzzle-puzzle.firebaseio.com",
    projectId: "guzzle-puzzle",
    storageBucket: "guzzle-puzzle.appspot.com",
    messagingSenderId: "355498500330"
  };
  firebase.initializeApp(config);
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
        console.error(error);
    })
  firebase.auth().onAuthStateChanged(function(user) {
    if (user)   {    
    var uid = user.uid;
        console.log(uid);
    localStorage.setItem("gpfuid", uid)
    }});
    
var database = firebase.database();
//var fuid = localStorage.getItem("gpfuid");
var fuid = firebase.auth().currentUser.uid;


// function logOut();
//     firebase.auth().signOut();
//     $(#quit).on("click", function(logOut));

// This is the submit button tied to the govna page
$("#submit").on("click", function (event) {
    console.log("Submit btn clicked")
    event.preventDefault();
    var safeWord = $("#safeWord").val().trim();
    console.log(safeWord);

    guzzPuzz = {
        safeWord: safeWord,
    }

    // push guzzPuzz to firebase
    database.ref().child("users/" + fuid).set(guzzPuzz);

    // request snap of firebase
    database.ref().on("value", function (snap) {

        // stores safeWord as userWord
        var userWord = snap.val().safeWord;
        
        var p = $("<p>");
        p.append("You chose: " + userWord);
        $("#userWord").append(p)

    })

})

// This is the reSubmit button tied to the verify pageXOffset.
$("#reSubmit").on("click", function (event) {
    console.log("reSubmit btn clicked")
    event.preventDefault();
    var verify = $("#verify").val().trim();
    console.log(verify);

    guzzPuzz = {
        safeWord: safeWord,
        verify: verify,
    }

    // push guzzPuzz to firebase
    database.ref().child("users/" + fuid).set(verify);
    // database.ref().set(verify);

    // request snap of firebase
    database.ref().on("value", function (snap) {

        // stores safeWord as userWord
        var userWord = snap.val().safeWord;
        
       if (verify == userWord) {
        var p = $("<p>");
        p.append("You entered: " + verify + "your Safe Word was " + userWord);
        p.append("<p> Great. Press Next to Proceed </p>");
        $("#compare").append(p);
       }
       else {
        var p = $("<p>");
        p.append("You entered: " + verify + "your Safe Word was " + userWord);
        p.append("<p> It's probably time to go home. </p>");
        $("#compare").append(p);
       }

    })

})
