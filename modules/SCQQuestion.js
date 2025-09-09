import { Question } from "./question.js";

export class SCQQuestion extends Question {
  constructor({ id, text, options, answer }) {
    super({ id, text, options });
    this.answerIndex = answer;
  }
  create() {
    const wrap = this.makeStructure();
    const opts = wrap.querySelector(".options-answer");

    this.options.forEach((label, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = label;
      btn.dataset.index = i;

      btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
          btn.classList.remove("active");
          return;
        }

        opts.querySelector(".option.active")?.classList.remove("active");

        btn.classList.add("active");
      });

      opts.append(btn);
    });

    return wrap;
  }

  isCorrect() {
  }
}
