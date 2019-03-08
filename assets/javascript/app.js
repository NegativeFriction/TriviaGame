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
  var winimage =
    "data:image/jpeg;base64,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";
  var loseimage =
    "data:image/png;base64,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";
  var questionNumber = 0;
  var time;
  var intervalID;
  var timer = $("#timer");
  var correctCounter;
  var incorrectCounter;

  function decrement() {
    time--;
    if (time === -1) {
      clearInterval(intervalId);
      timer.text("Out of time!");
      displayIncorrect();
      setTimeout(function() {
        displayQuestions();
      }, 3000);
    } else {
      displayTimer();
    }
  }

  function displayTimer() {
    timer.text(time);
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
    correctAnswersDiv.text("You got " + correctCounter + " questions correct.");
    var incorrectAnswersDiv = $("<div class='stats'>");
    incorrectAnswersDiv.text(
      "You got " + incorrectCounter + " questions incorrect."
    );
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
    newImg = $("<img class='image'>");
    newImg.attr("src", winimage);
    mainBody.append(newDiv);
    mainBody.append(newImg);
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
    newImg = $("<img class = 'image'>");
    newImg.attr("src", loseimage);
    mainBody.append(newDiv);
    mainBody.append(newImg);
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
      }, 30);
    } else {
      outOfQuestions();
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
});
