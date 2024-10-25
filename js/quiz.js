let score = 0;
const users = [];
const tempUser = {
  name: "",
  total: 0,
};
const quizzes = [
  {
    question: "are you single?",
    answer: "no",
    options: ["no", "yes"],
  },
  {
    question: "are you pregnant?",
    answer: "wehh",
    options: ["wehh", "yohh"],
  },
];

let quiz = quizzes[0]

function addUser(name) {
  if (!name) {
    throw new Error("Invalid user!");
  }
  tempUser.name = name;
}

function changeQuiz() {
  quiz = quizzes[quizzes.indexOf(quiz)+1]

  if(!quiz){
    quiz = quizzes[0]
    addScoreToUser()
    throw new Error("Reached end of questions!") 
  }
}

function addScore(answer, option) {
  if (!answer || !option) {
    throw new Error("Invalid answer or option!");
  }
  if (answer === option) {
    score++;
  } else {
    throw new Error("Incorrect answer!");
  }
}

function addScoreToUser() {
  if (tempUser.name === "") {
    throw new Error("User invalid!");
  }
  tempUser.score = score;
  tempUser.total = quizzes.length;
  users.push({...tempUser});
  
  clearScore()
}

function clearScore(){
  score = 0
  tempUser.score = score
}


export { quizzes, addScore, score, users, tempUser, addScoreToUser, addUser, quiz, changeQuiz, clearScore };
