import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private infoService: InfoService) { }

  // @Get()
  // getBasicInfo() {
  //     return 'I am a basic info';
  // }

  @Get()
  getInfo() {
    return this.infoService.get();
  }

  @Get('/calc/:val')
  calc(@Param() params: { val: string }) {
    return this.infoService.calc(params.val);
  }

  @UseGuards()
  @Get('/:id')
  getInfoInfo(@Param() params: { id: number }) {
    return this.infoService.getInfoById(params.id);

  }

  @Post()
  store(@Req() req: Request) {
    return this.infoService.create(req);
  }
}
