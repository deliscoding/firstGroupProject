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


