import { Answer } from "../../answer/dto/AnswerDto";
import { Question } from "../../dto/QuestionDto";


export class SimpleQuestion extends Question {
  constructor(id: number, question: string, possible_answers: Answer[], correct_answer: Answer[]) {

    if (correct_answer.length > 1) {
      throw new Error("Simple question can only have one correct answer");
    }

    super(id, question, possible_answers, correct_answer);
  }
}
