# QuizApp

## Technologies Used
- Node.js v16.0.0
- NPM 7.10.0
- Angular 12.0.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## APIs
- [Open Trivia DB](https://opentdb.com/)

## Structure
### Routes
- **Category (*default*)** - Used to show categories of quiz. Select category, difficulty and start the quiz.
![Category](screenshots/category.png?raw=true "Category")
- **Question** - To show question, choices and select answer.
![Question](screenshots/question.png?raw=true "Question")
- **Result** - Result screen will show final result with percentage.
![Result](screenshots/result.png?raw=true "Result")

### Components
#### 1. Categories - Category list
- Screen component for categories retrives list of categories.
- Show list of categories and difficulty.
- After click on start it will start quiz.
#### 2. Category - Category
- To show a category card reusable card.
#### 3. Question - Handle Question
- Question screen to show question and answer choices.
- After select answer and submit it.
#### 4. Result - Show result
- Quiz end result show screen.
- Will Show total correct and total questions with percentage.
- There is button to start another quiz

### Service
#### Quiz Service
- To start a new game.
- To get categories from API.
- To get Questions from API with difficulty and category.

### Observable
- Observable are used for every API calls
  - [getCategories](src/app/service/quiz.service.ts#L35-40)
  - [getQuestions](src/app/service/quiz.service.ts#L42-57)

### Pipe
- Categories page to show difficulty in titlecase [Link to line](src/app/components/categories/categories.component.html#L19)
- Result to show percentage in two decimals [Link to line](src/app/components/result/result.component.html#L6)

### Styling Library
- [Angular Material](https://material.angular.io/)
