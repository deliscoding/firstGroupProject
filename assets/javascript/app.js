// Initialize Firebase
var config = {
    apiKey: "AIzaSyAeAwiIUQprC7KrQhVym-xOkQgz1iHYeUE",
    authDomain: "guzzpuzz-9e5f3.firebaseapp.com",
    databaseURL: "https://guzzpuzz-9e5f3.firebaseio.com",
    projectId: "guzzpuzz-9e5f3",
    storageBucket: "",
    messagingSenderId: "108877913352"
};
firebase.initializeApp(config);



// Pulls Trivia Database API
var queryURL = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"

}).done(function (response) {
    console.log(response);
})

