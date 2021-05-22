import { Subject } from "rxjs";
import { Question } from "./question.model";

export class QuizState {

    total = 0;
    totalCorrect = 0;
    currentCount = 0;
    gameOver = new Subject();
    questionsList = new Subject<Question>();
    private questionsIterator: IterableIterator<Question>;
    currentQuestion: Question;

    constructor(private questions: Question[]) {
        this.total = questions.length;
        this.questionsIterator = questions[Symbol.iterator]();
        this.currentCount++;
        this.currentQuestion = this.questionsIterator.next().value;
    }

    submitAnswer(answer: string) {
        if (answer === this.currentQuestion.correct_answer) {
            this.totalCorrect++;
        }
        var result = this.questionsIterator.next();
        if (result.done) {
            this.gameOver.next();
        } else {
            this.currentQuestion = result.value;
            this.questionsList.next(this.currentQuestion);
            this.currentCount++;
        }
    }
}
