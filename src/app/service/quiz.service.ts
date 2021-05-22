import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizState } from '../model/quiz-state.model';
import { map } from 'rxjs/operators';
import { CategoryList } from '../model/category-list.model';
import { Category } from '../model/category.model';
import { Question } from '../model/question.model';
import { QuestionList } from '../model/question-list.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizState!: QuizState;

  private static CATEGORIES_URL = 'https://opentdb.com/api_category.php';
  private static QUESTIONS_URL = 'https://opentdb.com/api.php';

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }


  startNewGame(difficulty: string, amount: number, category?: number) {

    this.getQuestions(difficulty, amount, category).subscribe((res) => {
      this.quizState = new QuizState(res);
      this.router.navigate(['/question'], { relativeTo: this.route });

      this.quizState.gameOver.subscribe(() => this.router.navigate(['/result'], { relativeTo: this.route }));
    });
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<CategoryList>(QuizService.CATEGORIES_URL)
      .pipe(map((categoryList: CategoryList) =>
        categoryList.trivia_categories
      ));
  }

  getQuestions(difficulty: string, amount: number, category?: number): Observable<Question[]> {

    let params = new HttpParams();
    params = params.append("difficulty", difficulty);
    params = params.append("amount", amount.toString());

    if (category !== undefined) {
      params = params.append("category", category.toString());
    }

    return this.httpClient.get<QuestionList>(QuizService.QUESTIONS_URL, {
      params: params
    }).pipe(map((res: QuestionList) =>
      res.results
    ));
  }
}
