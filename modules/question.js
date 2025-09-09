export class Question {
  constructor({ id, text, options }) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.selectedIndex = null;
  }
  makeStructure() {
    const wrap = document.createElement("div");
    wrap.className = "question";
    wrap.dataset.id = this.id;

    const qText = document.createElement("div");
    qText.className = "question-text";
    qText.textContent = this.text;

    const opts = document.createElement("div");
    opts.className = "options-answer";

    wrap.append(qText, opts);
    return wrap;
  }
  create() {
    throw new Error("override create()");
  }
  isCorrect() {
    throw new Error("override isCorrect()");
  }
}
