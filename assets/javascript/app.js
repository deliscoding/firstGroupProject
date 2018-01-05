// LET'S GET WEIRD

// Document ready function executes once the page is fully loaded.
$(document).ready(function () {

    var newQuestion;
    var answers = [];
    var answerUnsort = [];
    var correctAnswer;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    // When a button is clicked we will begin the trivia and run the AJAX call to pull questions
    $(document).on("click", "#start", function () {
        // Pulls Trivia Database API
        var queryURL = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";

        // Console log the queryURL
        console.log("queryUrl: " + queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"

        }).done(function (response) {
            console.log(response);

            var results = response.results;
            console.log(results);

            for (var i = 0; i < results.length; i++) {

                // Creating a paragraph tag with the results
                // $("#questions").append('<p> Question: ' + results[i].question + '</p>');
                // $("#questions").append('<p> <button>A</button>' + results[i].incorrect_answers[2] + '</p>');
                // $("#questions").append('<p> <button>B</button> ' + results[i].incorrect_answers[1] + '</p>');
                // $("#questions").append('<p> <button>C</button> ' + results[i].correct_answer + '</p>');
                // $("#questions").append('<p> <button>D</button> ' + results[i].incorrect_answers[0] + '</p>');

                // $("#questions").append('<br>');

                // Storing results to new variables for manipulation
                newQuestion = results[i].question;
                correctAnswer = results[i].correct_answer;
                answers.push(results[i].incorrect_answers[0]);
                answers.push(results[i].incorrect_answers[1]);
                answers.push(results[i].incorrect_answers[2]);
                answers.push(results[i].correct_answer);

                answers = answers.filter(function (item, index, inputArray) {
                    return inputArray.indexOf(item) == index;
                });

                // console log for debugging
                console.log("Question: " + newQuestion);
                console.log("Answers: " + answers);
                console.log("Correct Answer: " + correctAnswer);

                var questionDiv = $("<div>");
                questionDiv.addClass("question");
                questionDiv.html(newQuestion);

                $("#questions").append(questionDiv);

                for (var i = 0; i < answers.length; i++) {
                    var answerBtn = $("<div>");

                    // Setting the src attribute of the image to a property pulled off the result item
                    answerBtn.addClass("waves-effect waves-light btn answer");
                    answerBtn.html(answers[i]);
                    answerBtn.attr("value", answers[i]);

                    $("#questions").append(answerBtn)
                }

                $(document).on("click", ".answer", function () {
                    console.log("Button Clicked");
                    var userAnswer = $(this).attr("value");
                    console.log(userAnswer);

                    if (userAnswer == correctAnswer) {
                        console.log("Correct Answer!")
                        correctAnswers++;
                        console.log("Correct Answers: " + correctAnswers);

                        // Creates a new button called keepPlay...
                        var keepPlay = $("<a>");

                        keepPlay.addClass("waves-effect waves-light btn next");
                        keepPlay.text("Next");
                        keepPlay.attr("href", "bar_page.html");
                        // ...which links back to bar_page.html
                        $("#questions").append(keepPlay)

                    }
                    else {
                        console.log("Wrong Answer!")
                        wrongAnswers++;
                        console.log("Wrong Answers: " + wrongAnswers);

                        // Creates a new button called go home...
                        var goHome = $("<a>");

                        goHome.addClass("waves-effect waves-light btn next");
                        goHome.text("Next");
                        goHome.attr("href", "uber_fail.html");
                        // ...which links to uber_fail.html
                        $("#questions").append(goHome)
                    }

                })
            }

        })
    })
})
