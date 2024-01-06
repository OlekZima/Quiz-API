import { Module } from '@nestjs/common';
import { SimpleQuestionController } from './simple-question.controller';

@Module({
  controllers: [SimpleQuestionController]
})
export class SimpleQuestionModule {}
