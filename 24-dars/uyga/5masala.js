class Question {
    constructor(text, answer) {
        this.text = text;
        this.answer = answer;
    }
}

class Quiz{
    constructor() {
        this.questions = [];
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    checkAnswer(questionIndex, userAnswer) {
        if (questionIndex < 0 || questionIndex >= this.questions.length) {
            throw new Error("Question not found");
        }

        const question = this.questions[questionIndex];

        if (question.answer.toLowerCase() !== userAnswer.toLowerCase()) {
            throw new Error("Wrong answer");
        }

        return "Tog'ri";
    }
}

try {
    const quiz = new Quiz();

    quiz.addQuestion(new Question("7*7", "49"));
    quiz.addQuestion(new Question("2 + 2", "4"));

    console.log(quiz.checkAnswer(0, "Toshkent"));
    console.log(quiz.checkAnswer(1, "5"));   
}
catch (error) {
    console.log("Xato:", error.message);
}
