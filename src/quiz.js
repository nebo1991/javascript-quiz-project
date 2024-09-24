class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    let randomIndex = Math.floor(Math.random() * this.questions.length);
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i] = this.questions[randomIndex];
    }
  }

  checkAnswer(answer) {
    this.questions.forEach((element) => {
      if (element.answer === answer) {
        this.correctAnswers++;
      }
    });
    return this.correctAnswers;
  }

  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) return true;
    if (this.currentQuestionIndex < this.questions.length) return false;
  }
}
