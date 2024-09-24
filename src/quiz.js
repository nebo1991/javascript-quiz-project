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

  filterQuestionsByDifficulty(difficulty) {
    const newArr = this.questions.filter(
      (element) => element.difficulty === difficulty
    );
    if (difficulty === 1 || difficulty === 2 || difficulty === 3)
      return (this.questions = newArr);
    return this.questions;
  }

  averageDifficulty() {
    let questionAverageDifficulty = 0;
    this.questions.reduce((acc, curr) => {
      acc += curr.difficulty;
      return (questionAverageDifficulty = acc);
    }, 0);
    return questionAverageDifficulty / this.questions.length;
  }
}
