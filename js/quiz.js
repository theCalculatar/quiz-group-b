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
];

function addUser(name) {
  if (!name) {
    throw new Error("Invalid user!");
  }
  tempUser.name = name;
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
  users.push(tempUser);
}

export { quizzes, addScore, score, users, tempUser, addScoreToUser, addUser };
