import { Component } from '@angular/core';
import { QuizService } from './service/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';

  constructor() {
  }
}
