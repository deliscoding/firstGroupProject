// LET'S GET WEIRD

// Initialize OTHER Firebase
//var config = {
//     apiKey: "AIzaSyAeAwiIUQprC7KrQhVym-xOkQgz1iHYeUE",
//     authDomain: "guzzpuzz-9e5f3.firebaseapp.com",
//     databaseURL: "https://guzzpuzz-9e5f3.firebaseio.com",
//     projectId: "guzzpuzz-9e5f3",
//     storageBucket: "",
//     messagingSenderId: "108877913352"
// };
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
    if (errorCode === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
    } else {
        console.error(error);
    }
    });

var database = firebase.database();

function logOut();
    firebase.auth().signOut();
    $(#quit).on("click", function(logOut));

// Pulls Trivia Database API
var queryURL = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"

}).done(function (response) {
    console.log(response);

    var results = response.results;
    console.log(results);

    for (var i = 0; i < results.length; i++) {

        // Creating a paragraph tag with the result's rating

        $("#questions").append('<p> Category: ' + results[i].category + '</p>');
        $("#questions").append('<p> Question: ' + results[i].question + '</p>');
        $("#questions").append('<p> A: ' + results[i].correct_answer + '</p>');
        $("#questions").append('<br>');
        // incorrectAnswer = results[i].incorrectAnswers[x]
        // console.log(incorrectAnswer)

        // for (var x = 0; i < incorrectAnswer.length; x++) {

        //     $("#questions").append('<p> B: ' + incorrectAnswer[x] + '</p>')
        //     p.text("C: " + incorrectAnswer[x])
        //     p.text("D: " + incorrectAnswer[x])
        // }


        // Setting the src attribute of the image to a property pulled off the result item
        // p.addClass("trivia");

        // Appending the paragraph and image tag to the resultsDiv
        // $("#questions").append(p);
    }

})
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
    database.ref(users).set(guzzPuzz);

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
    database.ref().set(verify);

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


