$(document).ready(function() {
  // Initialize all of my questions as objects in an array of questions. Each object contains the question, four answers,
  // and the correct answer. If I elect to add gifs or sounds, this is also where I'll put them.

  //   Questions were lovingly stolen from https://chartcons.com/100-bar-trivia-questions-2/
  var questionsArray = [
    {
      question: "Which US State is on the label of Jack Daniel's Whiskey?",
      answers: ["Louisiana", "Tennessee", "Indiana", "Kentucky"],
      correctAnswer: "Tennessee"
    },
    {
      question: "A phlebotomist extracts what from the human body?",
      answers: ["Excess Ear Wax", "Mucus", "Stomach Acid", "Blood"],
      correctAnswer: "Blood"
    },
    {
      question:
        "Which singer's real name is Stefani Joanne Angelina Gemanotta?",
      answers: ["Lady Gaga", "Cher", "Christina Aguilera", "Beyonce"],
      correctAnswer: "Lady Gaga"
    },
    {
      question: "How many players are there in a baseball team?",
      answers: ["7", "18", "9", "11"],
      correctAnswer: "9"
    },
    {
      question: "In what country is Port Said?",
      answers: ["Spain", "Egypt", "Somalia", "Portugal"],
      correctAnswer: "Egypt"
    },
    {
      question: "Who was the president of Vietnam from 1945-54?",
      answers: ["Le Thi Lam", "Ho Chi Min", "Duc Khiem", "Le Quang Ha"],
      correctAnswer: "Ho Chi Min"
    },
    {
      question: "Which country is known as 'The Pearl of Africa?'",
      answers: ["Egypt", "Uganda", "South Africa", "Seychelles"],
      correctAnswer: "Uganda"
    },
    {
      question:
        "The Pyrenees mountain range separates which two European countries?",
      answers: [
        "France and Spain",
        "Portugal and Spain",
        "England and Scotland",
        "Canada and New Zealand"
      ],
      correctAnswer: "France and Spain"
    },
    {
      question:
        "At what temperature is degrees Fahrenheit the same value as degrees Celsius",
      answers: ["40 degrees", "-40 degrees", "0 degrees", "232 degrees"],
      correctAnswer: "-40 degrees"
    },
    {
      question: "Nariyal is the Indian term for what foodstuff?",
      answers: [
        "Braised Lamb Marinated in Yogurt",
        "A special sort of rice using a sacred curry",
        "A Coconut",
        "Chilled Monkey Brains"
      ],
      correctAnswer: "A Coconut"
    }
  ];

  //   Initialize a few global variables for the scope of the program.
  var mainBody = $("#mainBody");
  var questionNumber = 0;
  var time;
  var intervalID;
  var timer = $("#timer");
  var correctCounter;
  var incorrectCounter;
  var timeToWait = 5000;

  function decrement() {
    time--;
    if (time === -1) {
      clearInterval(intervalId);
      timer.text("Out of time!");
      displayIncorrect();
      questionNumber++;
      if (questionNumber < questionsArray.length) {
        setTimeout(function() {
          displayQuestions();
        }, timeToWait);
      } else {
        setTimeout(function() {
          outOfQuestions();
        }, timeToWait);
      }
    } else {
      displayTimer();
    }
  }

  function displayTimer() {
    timer.text("Time left: " + time);
  }

  function resetTimer() {
    clearInterval(intervalId);
    time = 30;
    intervalId = setInterval(decrement, 1000);
    displayTimer();
  }

  function titleScreen() {
    var newDiv = $("<div class='title'>");
    newDiv.text("Click the start button to start the game!");
    var newButton = $("<button class='start'>");
    newButton.text("Start");
    mainBody.append(newDiv);
    mainBody.append(newButton);
  }

  //   Questions are selected by questionNumber. displayQuestions displays the current question per where the user is in the program.
  function displayQuestions() {
    mainBody.empty();
    resetTimer();
    var newDiv = $("<div id='question'>");

    newDiv.text(questionsArray[questionNumber].question);
    newSpace = $("<br>");
    newDiv.append(newSpace);

    for (
      var answerNumber = 0;
      answerNumber < questionsArray[questionNumber].answers.length;
      answerNumber++
    ) {
      var newAnswer = $("<div class = 'answer'>");

      newAnswer.text(questionsArray[questionNumber].answers[answerNumber]);
      newSpace = $("<br>");
      newDiv.append(newAnswer);
      newDiv.append(newSpace);
    }
    mainBody.append(newDiv);
  }

  function outOfQuestions() {
    mainBody.empty();
    var titleDiv = $("<div class='title'>");
    titleDiv.text("You've answered all of the questions!");
    var correctAnswersDiv = $("<div class ='stats'>");
    if (correctCounter != 1) {
      correctAnswersDiv.text(
        "You got " + correctCounter + " questions correct."
      );
    } else {
      correctAnswersDiv.text(
        "You got " + correctCounter + " question correct."
      );
    }
    var incorrectAnswersDiv = $("<div class='stats'>");
    if (incorrectCounter != 1) {
      incorrectAnswersDiv.text(
        "You got " + incorrectCounter + " questions incorrect."
      );
    } else {
      incorrectAnswersDiv.text(
        "You got " + incorrectCounter + " question incorrect."
      );
    }
    var letterGrade =
      (correctCounter / (correctCounter + incorrectCounter)) * 100;

    if (letterGrade >= 90) {
      letterGrade = "A! Great job!";
    } else if (letterGrade >= 80) {
      letterGrade = "B! That's thoroughly acceptable.";
    } else if (letterGrade >= 70) {
      letterGrade = "C.... good.... good job?";
    } else if (letterGrade >= 60) {
      letterGrade = "D. D's get degrees?";
    } else {
      letterGrade = "F. Did you pay any attention in school?";
    }

    var gradeDiv = $("<div class='stats'>");
    gradeDiv.text("Your final grade is: " + letterGrade);

    var newButton = $("<button class='start'>");
    newButton.text("Click here to play again!");

    mainBody.append(titleDiv);
    mainBody.append(correctAnswersDiv);
    mainBody.append(incorrectAnswersDiv);
    mainBody.append(gradeDiv);
    mainBody.append(newButton);
  }

  //   Determine whether the user was correct or incorrect, and execute the appropraite response.
  function checkAnswer(answer) {
    if (answer === questionsArray[questionNumber].correctAnswer) {
      displayCorrect();
    } else {
      displayIncorrect();
    }
  }

  //   Congratulate the user on a correct answer.
  function displayCorrect() {
    // console.log("correct");
    mainBody.empty();
    var newDiv = $("<div class = 'check'>");
    newDiv.text("Correct!");
    // newImg = $("<img class='image'>");
    // newImg.attr("src", winimage);
    mainBody.append(newDiv);
    gifGenerator("beer");
    // mainBody.append(newImg);
    correctCounter++;
  }

  //   Insult the user for the incorrect answer.
  function displayIncorrect() {
    // console.log("incorrect");
    // console.log("correct");
    mainBody.empty();
    var newDiv = $("<div class = 'check'>");
    newDiv.text(
      "Wrong! The correct answer was " +
        questionsArray[questionNumber].correctAnswer +
        "!"
    );
    // newImg = $("<img class = 'image'>");
    // newImg.attr("src", loseimage);
    mainBody.append(newDiv);
    // mainBody.append(newImg);
    gifGenerator("crying");
    incorrectCounter++;
  }

  //   Initial call to display the first question
  titleScreen();

  //   when the user clicks on an answer, check the answer and iterate question number.
  // If we still have questions left, then wait for 3 seconds (during which the user sees the correct or incorrect answer screens)
  // and then display the next question.
  $(document.body).on("click", ".answer", function() {
    clearInterval(intervalId);
    timer.empty();
    checkAnswer($(this).text());
    questionNumber++;
    if (questionNumber < questionsArray.length) {
      setTimeout(function() {
        displayQuestions();
      }, timeToWait);
    } else {
      setTimeout(function() {
        outOfQuestions();
      }, timeToWait);
    }
  });

  $(document.body).on("click", ".start", function() {
    intervalId = setInterval(decrement, 1000);
    questionNumber = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    resetTimer();
    displayQuestions();
  });

  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

  function gifGenerator(condition) {
    var queryURL =
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" +
      condition;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var imageUrl = response.data.image_original_url;

      var responseImage = $("<img id='image'>");

      responseImage.attr("src", imageUrl);
      responseImage.attr("class", "image");
      responseImage.attr("alt", condition + " image");
      console.log(response.data);

      mainBody.append(responseImage);
    });
  }
});
