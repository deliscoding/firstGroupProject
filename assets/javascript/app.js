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

var queryURL = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";


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


    
        $("#questions").append('<p> Question: ' + results[i].question + '</p>');
        $("#questions").append('<p> A: ' + results[i].incorrect_answers[2] + '</p>');
        $("#questions").append('<p> B: ' + results[i].incorrect_answers[1] + '</p>');
        $("#questions").append('<p> C: ' + results[i].correct_answer + '</p>');
        $("#questions").append('<p> D: ' + results[i].incorrect_answers[0] + '</p>');
        

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

//     for (var j = 0; j < questions[i].answers.length; j++) {
//         panel.append("<input type='radio' name='question-");
//         // + i +
//         // "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
//       }
});

