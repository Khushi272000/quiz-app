import { Category } from "./category.model";
import { Question } from "./question.model";

export interface QuestionList {
    response_code: number;
    results: Question[];
}
