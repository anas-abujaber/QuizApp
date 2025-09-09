# 📘 Quiz App

## 🎯 Objective

A simple single-page **Quiz Application** built with **JavaScript (ES6 Classes + OOP)**.  
The app displays all questions at once, supports two types of questions (**Single Choice Question – SCQ** and **True/False Question – TFQ**), allows selecting one option per question, and shows a final score with pass/fail feedback.

---

## 👤 User Stories

- As a user, I want to see **all questions on screen** at once.  
- As a user, I want to answer **SCQ or TFQ** type questions.  
- As a user, I want a **Restart button** to reset the quiz.  
- As a user, I want a **Submit button** to finish and see my result.  
- As a user, I want to see my **final score** and **pass/fail status** (≥70% = pass).  
- As a user, I want to see the **selected option highlighted (active state)**.  

---

## 🔑 Acceptance Criteria

- All questions displayed together (no pagination).  
- Submit → shows **score (%)** and **PASS/FAIL**.  
- Restart → clears UI and restarts the quiz.  
- Use **OOP**:
  - Base `Question` class.  
  - Subclass `SCQQuestion` for single choice.  
  - Subclass `TFQuestion` for true/false.  
  - `QuizController` handles flow (render, submit, restart).  

---

## 🛠️ Technical Details

- **JavaScript ES6 Classes**:
  - `Question` (base structure).  
  - `SCQQuestion` (Single Choice Question).  
  - `TFQuestion` (True/False Question).  
  - `QuizController` (manages rendering and results).  
- **DOM Manipulation**: dynamic rendering of questions and options.  
- **OOP Principles**: each question type defines its own `create()` and `isCorrect()`.  
- **CSS**: styles for UI and **active state** highlight.  

---

## 📂 Project Structure

```
.
├── index.html              # Main page
├── style.css               # Styling
├── app.js                  # Bootstraps the app
├── quizController.js       # Quiz flow manager
├── modules/
│   ├── question.js         # Abstract Question class
│   ├── SCQQuestion.js      # Single Choice Question
│   ├── TFQuestion.js       # True/False Question
├── data/
│   └── questions.data.js   # Question instances
└── README.md               # Documentation
```

---

## 🚀 Getting Started

1. Clone the repo:  
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```
2. Open **`index.html`** directly in your browser.  
3. Select answers → **Submit** → See score + pass/fail.  
4. Use **Restart** to try again.  
