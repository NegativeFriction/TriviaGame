# TriviaGame

Trivia Game takes the user through a pub trivia. The user clicks an initial startup button, then is given multiple choice trivia questions one at a time. The user clicks whichever trivia button they've selected to make their guess. At the end, they are given their total number of correct and incorrect answers, as well as a letter grade based on their percentage correct. They are also given the option to restart the game. Players have 30 seconds per question to respond.

Behind the scenes:

The game is largely controlled by the global variable questionsArray. This contains 10 question objects, with attributes of question, answers, and correct answer. The displayQuestions function wipes the main screen of what was previously there, then creates new divs for the question and each individual answer. When the user clicks on their selected answer, the JS checks their response against the correctAnswer attribute. If they match, the user is given a celebratory gif (giphy API linked to the search "beer"). if not, they are given a 'sad' gif (giphy API linked to "crying").

When the gif is finished playing, a global indexing variable used for selecting questions iterates by one, progressing to the next question. Once the indexing variable has iterated through the length of questionsArray, a the results screen pops up.

Clicking the "play again" button resets the correct and incorrect response counters and sets the indexing variable for the questions back to 0.

Any questions or bugs can be directed to chris.chrispete@gmail.om
