import Storage from "./storage/storage.js";

export class QuizController {
  constructor(data) {
    this.data = data;
    this.storage = new Storage("quiz_answers");
    this.restore();
  }

  loadQuestions(container) {
    container.innerHTML = "";
    this.data.forEach((q) => container.append(q.create(() => this.save())));
  }

  save() {
    this.storage.saveAll(
      this.data
        .filter((q) => q.selectedIndex !== null)
        .map((q) => ({ id: q.id, selectedIndex: q.selectedIndex }))
    );
  }

  restore() {
    (this.storage.load() || []).forEach((s) => {
      const q = this.data.find((q) => q.id === s.id);
      if (q) q.selectedIndex = s.selectedIndex;
    });
  }
  grade() {
    const total = this.data.length;
    const correct = this.data.filter((q) => q.isCorrect()).length;
    const percent = Math.round((correct / total) * 100);
    return { correct, total, percent };
  }

  reset(container) {
    this.data.forEach((q) => (q.selectedIndex = null));
    this.storage.clear();
    this.load(container);
  }
}
