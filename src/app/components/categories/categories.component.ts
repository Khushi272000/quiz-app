import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  difficulties = [
    'easy',
    'medium',
    'hard'
  ];
  selectedDifficulty = 'easy';
  selectedCategory!: number;

  public onValChange(val: string) {
    this.selectedDifficulty = val;
  }
  //in the component define a function
  onSelect(value: number) {
    this.selectedCategory = value;
  }
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.selectedCategory = categories[0].id;
    });
  }

  startQuiz() {
    this.quizService.startNewGame(this.selectedDifficulty, 15, this.selectedCategory);
  }
}
