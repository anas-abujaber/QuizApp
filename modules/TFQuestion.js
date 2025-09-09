import { Question } from "./question.js";

export class TFQuestion extends Question {
  constructor({ id, text, options, correct }) {
    super({ id, text, options });
    this.correct = !!correct; // تأكيد boolean
  }

  create(onSelect) {
    const wrap = this.makeStructure();
    const opts = wrap.querySelector(".options-answer");

    this.options.forEach((label, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = label;
      btn.dataset.index = i;

      if (this.selectedIndex === i) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        opts.querySelector(".option.active")?.classList.remove("active");
        btn.classList.add("active");
        this.selectedIndex = i;
        onSelect();
      });

      opts.append(btn);
    });

    return wrap;
  }

  isCorrect() {
    if (this.selectedIndex == null) return false;
    const chosen = this.options[this.selectedIndex].toLowerCase();
    return (chosen === "true") === this.correct;
  }
}
