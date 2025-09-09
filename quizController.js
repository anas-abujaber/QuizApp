export class QuizController {
  constructor(data) {
    this.data = data;
  }

  loadQuestions(container) {
    container.innerHTML = ""; 
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

  reset(container) {
    this.data.forEach((q) => {
      q.selectedIndex = null;
    });
    this.loadQuestions(container);
  }
}
