import { addUser, quizzes, addScore } from "./quiz.js";

const question = quizzes[0];

const rightSection = document.querySelector(".question");

const addUserBtn = document.querySelector(".add-user");
const submitBtn = document.querySelector(".submit-button");

const loginPage = document.querySelector(".login");
const gamePage = document.querySelector(".game-section");

addUserBtn.addEventListener("click", (e) => {

  const userName = document.querySelector("#name-input").value;

  try {
    addUser(userName);

    loginPage.classList.add("hide");
    gamePage.classList.remove("hide");
  } catch (error) {
    alert(error.message);
  }

  displayQuestions();

});

submitBtn.addEventListener('click', ()=>{
    const option = document.querySelector('input')
    console.log(option)
    addScore(question.answer,)
})

function displayQuestions() {
  rightSection.innerHTML = `
    <h3>Question 1</h3>
    <p>${question.question}</p>`;

  const optionsElement = document.querySelector(".options");
  question.options.forEach((option) => {
    optionsElement.innerHTML += ` <label><input type="radio" name="question" value="${option}"> ${option}</input></label><br>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {});

function submitQuiz() {
  console.log("object");
}
