import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswerModule } from './quiz/question/answer/answer.module';
import { QuestionModule } from './quiz/question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

@Module({
  imports: [QuestionModule, AnswerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      port: 5432,
      database: 'postgres',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
