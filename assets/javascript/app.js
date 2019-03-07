$(document).ready(function() {
  // Initialize all of my questions as objects in an array of questions. Each object contains the question, four answers,
  // and the correct answer. If I elect to add gifs or sounds, this is also where I'll put them.

  //   Questions were lovingly stolen from https://chartcons.com/100-bar-trivia-questions-2/
  var questionsArray = [
    {
      question: "Whihch US State is on the label of Jack Daniel's Whiskey?",
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
      answers: ["Spain", "Egypt", "Somolia", "Portugal"],
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
        "At what temperature is degrees Farenheit the same value as degrees Celsius",
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

  var mainBody = $("#mainBody");
  var questionNumber = 0;

  function displayQuestions() {
    mainBody.empty();
    var newDiv = $("<div id='question'>");

    newDiv.text(questionsArray[questionNumber].question);

    for (
      var answerNumber = 0;
      answerNumber < questionsArray[questionNumber].answers.length;
      answerNumber++
    ) {
      var newAnswer = $("<div class = 'answer'>");

      newAnswer.text(questionsArray[questionNumber].answers[answerNumber]);
      newDiv.append(newAnswer);
    }
    mainBody.append(newDiv);
  }

  function outOfQuestions() {
    console.log("Out of questions");
  }

  function checkAnswer(answer) {
    if (answer === questionsArray[questionNumber].correctAnswer) {
      displayCorrect();
    } else {
      displayIncorrect();
    }
  }

  function displayCorrect() {
    console.log("correct");
  }

  function displayIncorrect() {
    console.log("incorrect");
  }

  displayQuestions();
  $(document.body).on("click", ".answer", function() {
    console.log("Clicked a thing");
    checkAnswer($(this).text());
    questionNumber++;
    if (questionNumber < questionsArray.length) {
      displayQuestions();
    } else {
      outOfQuestions();
    }
  });
});
