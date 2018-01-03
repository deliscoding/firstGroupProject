// LET'S GET WEIRD

// Pulls Trivia Database API

var queryURL = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";


// var timer;

// var game = {

//     correct: 0,
//     incorrect: 0,
//     counter: 30,

// countdown: function() {
//     game.counter--;
//     $("#counter-number").html(game.counter);
//     if (game.counter === 0) {
//       alert("TIME UP");
//       game.done();
//     }
//   }
  
// };



// Console log the queryURL

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"

}).done(function (response) {
    console.log(response);

    var results = response.results;
    console.log(results);

    for (var i = 0; i < results.length; i++) {

        // Creating a paragraph tag with the results
    
        $("#questions").append('<p> Question: ' + results[i].question + '</p>');
        $("#questions").append('<p> <button>A</button>' + results[i].incorrect_answers[2] + '</p>');
        $("#questions").append('<p> <button>B</button> ' + results[i].incorrect_answers[1] + '</p>');
        $("#questions").append('<p> <button>C</button> ' + results[i].correct_answer + '</p>');
        $("#questions").append('<p> <button>D</button> ' + results[i].incorrect_answers[0] + '</p>');


        // $("#questions").append('<p> Question: ' + results[1].question + '</p>');
        // $("#questions").append('<p> A: ' + results[1].incorrect_answers[2] + '</p>');
        // $("#questions").append('<p> B: ' + results[1].incorrect_answers[1] + '</p>');
        // $("#questions").append('<p> C: ' + results[1].correct_answer + '</p>');
        // $("#questions").append('<p> D: ' + results[1].incorrect_answers[0] + '</p>');



        

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

