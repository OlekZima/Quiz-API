import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswerModule } from './quiz/question/answer/answer.module';
import { QuestionModule } from './quiz/question/question.module';

@Module({
  imports: [QuestionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
