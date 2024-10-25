import { addUser, changeQuiz, addScore, quiz, tempUser, users } from "./quiz.js";

const question = quiz;

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
    const option = document.querySelector('input[name="question"]:checked').value;

    try {
      addScore(quiz.answer,option)
    } catch (error) {
      console.log(error.message)
    }
    try {
      changeQuiz()
    } catch (error) {
      gamePage.classList.add("hide");
    }
    displayQuestions()
  })

function displayQuestions() {

  rightSection.innerHTML = `
    <h3>Question 1</h3>
    <p>${quiz.question}</p>`;

  const optionsElement = document.querySelector(".options");
  optionsElement.innerHTML = ''

  quiz.options.forEach((option) => {
    optionsElement.innerHTML += ` <label><input type="radio" name="question" value="${option}"> ${option}</input></label><br>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {});


