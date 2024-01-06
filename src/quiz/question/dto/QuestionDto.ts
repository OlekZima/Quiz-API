import { Answer } from "../answer/dto/AnswerDto";

export class Question {
  id: number;
  question: string;
  possible_answers: Answer[];
  correct_answers: Answer[];

  constructor(id: number, question: string, possible_answers: Answer[], correct_answers: Answer[]) {
    if (!possible_answers.some(answer => correct_answers.includes(answer))) {
      throw new Error("Correct answer must be one of the possible answers");
    }
    this.id = id;
    this.question = question;
    this.possible_answers = possible_answers;
    this.correct_answers = correct_answers;
  }
}