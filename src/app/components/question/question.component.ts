import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question.model';
import { QuizService } from 'src/app/service/quiz.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  total = 0;
  totalCorrect = 0;
  currentCount = 0;
  question!: Question;
  choices!: Array<string>;
  selectedChoice?: string;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.setQuestion(this.quizService.quizState.currentQuestion);

    this.quizService.quizState.questionsList.subscribe((question) => {
      this.setQuestion(question);
    });
    this.total = this.quizService.quizState.total;
  }

  public selectChoice(val: string) {
    this.selectedChoice = val;
  }

  setQuestion(curQuestion: Question) {
    this.question = curQuestion;
    this.totalCorrect = this.quizService.quizState.totalCorrect;
    this.currentCount = this.quizService.quizState.currentCount;
    this.choices = curQuestion.incorrect_answers;
    this.choices.push(curQuestion.correct_answer);
    this.choices.sort(() => Math.random() - 0.5);
    if (!environment.production) {
      console.log(curQuestion.correct_answer);
    }
  }

  submitAnswer() {
    if(this.selectedChoice!==undefined) {
      this.quizService.quizState.submitAnswer(this.selectedChoice);
    } else {
      alert("Please select an answer");
    }
    this.selectedChoice = undefined;
    //console.log(this);
  }
}
