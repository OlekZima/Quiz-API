import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { SimpleQuestionModule } from './simple-question/simple-question.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
  imports: [SimpleQuestionModule, QuizModule]
})
export class QuestionModule {}
