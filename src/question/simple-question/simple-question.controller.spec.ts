import { Test, TestingModule } from '@nestjs/testing';
import { SimpleQuestionController } from './simple-question.controller';

describe('SimpleQuestionController', () => {
  let controller: SimpleQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpleQuestionController],
    }).compile();

    controller = module.get<SimpleQuestionController>(SimpleQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
