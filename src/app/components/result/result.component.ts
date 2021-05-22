import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  total = 0;
  totalCorrect = 0;
  currentCount = 0;

  constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.total = this.quizService.quizState.total;
    this.totalCorrect = this.quizService.quizState.totalCorrect;
    this.currentCount = this.quizService.quizState.currentCount;
  }

  anotherQuiz() {
    this.router.navigate(['/'], {relativeTo: this.route});
  }
}
