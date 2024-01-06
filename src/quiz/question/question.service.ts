import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
  test(): string {
    return 'test question';
  }
}
