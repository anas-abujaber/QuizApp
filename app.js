import { questionsData } from "./data/questions.data.js";
import { QuizController } from "./quizController.js";

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");
const resultContainer = document.getElementById("result");

const quizApp = new QuizController(questionsData);

quizApp.loadQuestions(quiz);

restartBtn.addEventListener("click", () => {
  quizApp.reset(quiz);
});

submitBtn.addEventListener("click", () => {
  const { correct, total, percent } = quizApp.grade();
  resultContainer.textContent = `Score: ${correct}/${total} (${percent}%) → ${
    percent >= 70 ? "PASS ✅" : "FAIL ❌"
  }`;
});
