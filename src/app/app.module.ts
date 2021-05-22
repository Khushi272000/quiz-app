import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionComponent } from './components/question/question.component';
import { QuizService } from './service/quiz.service';
import { ResultComponent } from './components/result/result.component';
import { CategoryComponent } from './components/categories/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionComponent,
    ResultComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
