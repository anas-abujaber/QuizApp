export class QuizController {
  constructor(data) {
    this.data = data;
  }

  loadQuestions(container) {
    this.data.forEach((q) => {
      container.append(q.create());
    });
  }
  grade() {
    const total = this.data.length;
    const correct = this.data.filter((q) => q.isCorrect()).length;
    const percent = Math.round((correct / total) * 100);
    return { correct, total, percent };
  }

  reset() {
    this.data.forEach((q) => {
      q.selectedIndex = null;
      const qElem = document.querySelector(`.question[data-id="${q.id}"]`);
      qElem.querySelector(".option.active")?.classList.remove("active");
    });
  }
}
