import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InfoModule } from './info/info.module';

@Module({
  controllers: [AppController],
  imports: [InfoModule],
})
export class AppModule { }
