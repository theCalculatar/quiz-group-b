import { addUser, changeQuiz, addScore, currentQuiz, users, questionNum } from "./quiz.js";

const rightSection = document.querySelector(".question");

const addUserBtn = document.querySelector(".add-user");
const submitBtn = document.querySelector(".submit-button");
const takeQbtn = document.querySelector(".take-quiz");

const loginPage = document.querySelector(".login");
const gamePage = document.querySelector(".game-section");
const leaderboard = document.querySelector(".results");

takeQbtn.addEventListener("click", () => {
  leaderboard.classList.add("hide");
  loginPage.classList.remove("hide");
});

addUserBtn.addEventListener("click", (e) => {
  const userName = document.querySelector("#name-input");

  try {
    addUser(userName.value);

    loginPage.classList.add("hide");
    gamePage.classList.remove("hide");

    userName.value = "";
  } catch (error) {
    alert(error.message);
  }

  displayQuestions();
});

submitBtn.addEventListener("click", () => {
  const option = document.querySelector('input[name="question"]:checked') || "";

  try {
    addScore(currentQuiz.answer, option.value);
  } catch (error) {
    if (error.message !== "Incorrect answer!") {
      alert(error.message);
      return;
    }
  }
  //
  try {
    changeQuiz();
  } catch (error) {
    gamePage.classList.add("hide");
    leaderboard.classList.remove("hide");
    displayLeaderboards();
  }
  displayQuestions();
});

function displayQuestions() {
  rightSection.innerHTML = `
    <h3>Question ${questionNum}</h3>
    <p>${currentQuiz.question}</p>`;

  const optionsElement = document.querySelector(".options");
  optionsElement.innerHTML = "";

  currentQuiz.options.forEach((option) => {
    optionsElement.innerHTML += ` <label><input type="radio" name="question" value="${option}"> ${option}</input></label>`;
  });
}

function displayLeaderboards() {
  const bodyTable = document.querySelector(".board");
  bodyTable.innerHTML = "";
  users.forEach((element, index) => {
    bodyTable.innerHTML += `<tr>
                              <td>${index + 1}</td>
                              <td>${element.name}</td>
                              <td>${element.score}</td>
                            </tr>
            `;
  });
}

document.addEventListener("DOMContentLoaded", () => {});
