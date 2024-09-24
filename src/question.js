class Question {
  // YOUR CODE HERE:
  //
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    let randomIndex = Math.floor(Math.random() * this.choices.length);
    for (let i = 0; i < this.choices.length; i++) {
      this.choices[i] = this.choices[randomIndex];
    }
  }
}
