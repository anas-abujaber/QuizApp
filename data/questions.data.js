
import { SCQQuestion } from "../modules/SCQQuestion.js";
import { TFQuestion } from "../modules/TFQuestion.js";
// import { MCQQuestion } from "../modules/MCQQuestion.js";

export const questionsData = [
  new SCQQuestion({
    id: 1,
    text: "Which HTML tag is used to include JavaScript code?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2,
  }),
  new SCQQuestion({
    id: 2,
    text: "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  }),
  new SCQQuestion({
    id: 3,
    text: "HTML stands for?",
    options: [
      "Hyper Transfer Markup Language",
      "HyperText Markup Language",
      "HighText Markdown Language",
      "Home Tool Markup Language",
    ],
    answer: 1,
  }),
  new SCQQuestion({
    id: 4,
    text: "Which CSS property sets the text color?",
    options: ["color", "text-color", "font-color", "foreground"],
    answer: 0,
  }),
  new SCQQuestion({
    id: 5,
    text: "typeof null in JavaScript is…?",
    options: ["null", "object", "undefined", "number"],
    answer: 1,
  }),
  new SCQQuestion({
    id: 6,
    text: "Which method converts JSON string to an object?",
    options: [
      "JSON.toObject()",
      "JSON.parse()",
      "Object.fromJSON()",
      "parseJSON()",
    ],
    answer: 1,
  }),
  new SCQQuestion({
    id: 7,
    text: "Make an element a flex container:",
    options: [
      "display: flex;",
      "flex: 1;",
      "position: flex;",
      "justify-content: flex;",
    ],
    answer: 0,
  }),
  new SCQQuestion({
    id: 8,
    text: "Largest HTML heading tag?",
    options: ["<h1>", "<h3>", "<h6>", "<header>"],
    answer: 0,
  }),
  new SCQQuestion({
    id: 9,
    text: "HTTP status for Not Found:",
    options: ["400", "404", "401", "500"],
    answer: 1,
  }),
  new SCQQuestion({
    id: 10,
    text: "Array method that returns a new array of elements passing a test:",
    options: ["map", "filter", "forEach", "reduce"],
    answer: 1,
  }),
  new SCQQuestion({
    id: 11,
    text: "Git command to stage changes:",
    options: ["git commit", "git push", "git add", "git init"],
    answer: 2,
  }),
  new SCQQuestion({
    id: 12,
    text: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: 2,
  }),

  // True/False
  new TFQuestion({
    id: 13,
    text: "CSS stands for Cascading Style Sheets.",
    options: ["True", "False"],
    correct: true,
  }),
  new TFQuestion({
    id: 14,
    text: "JavaScript can only be run in the browser.",
    options: ["True", "False"],
    correct: false,
  }),
  new TFQuestion({
    id: 15,
    text: "HTML5 introduced the <video> element.",
    options: ["True", "False"],
    correct: true,
  }),
  new TFQuestion({
    id: 16,
    text: "In Git, 'git push' is used to stage files.",
    options: ["True", "False"],
    correct: false,
  }),
  new TFQuestion({
    id: 17,
    text: "JSON stands for JavaScript Object Notation.",
    options: ["True", "False"],
    correct: true,
  }),
];
