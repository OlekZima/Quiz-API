import { Question } from "src/question/dto/QuestionDto";

export class Quiz {
  id: number;
  name: string;
  questions: Question[];

  constructor(id: number, name: string, questions: Question[]) {
    this.id = id;
    this.name = name;
    this.questions = questions;
  }

}