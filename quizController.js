export class QuizController {
  constructor(data) {
    this.data = data;
  }

  loadQuestions(container) {
    this.data.forEach((q) => {
      container.append(q.create());
    });
  }
}
