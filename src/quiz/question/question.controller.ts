import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('quiz/question')
export class QuestionController {

  constructor(private questionService: QuestionService) { }

  @Get('test')
  test(): string {
    return this.questionService.test();
  }
}
