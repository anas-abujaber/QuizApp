import { questionsData } from "./data/questions.data.js";
import { QuizController } from "./quizController.js";

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");

const quizApp = new QuizController(questionsData);

quizApp.loadQuestions(quiz);

submitBtn.addEventListener("click", () => {
  const { correct, total, percent } = quizApp.grade();
  alert(
    `Score: ${correct}/${total} (${percent}%)\n${
      percent >= 70 ? "PASS ✅" : "FAIL ❌"
    }`
  );
});

restartBtn.addEventListener("click", () => {});
