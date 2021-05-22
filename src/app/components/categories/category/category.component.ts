import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;
  @Input() selectedCategory!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
