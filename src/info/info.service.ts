import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class InfoService {

  calc(val: string) {
    return eval(val);
  }

  getInfoById(id: number) {
    return 'I am a info with id ' + id;
  }

  create(req: Request) {
    return 'I am a creator that creates ' + req.body.name + ' ';
  }

  get() {
    return { name: 'Yo', email: 'yo@yo.com', phone: '1234567890' };
  }
}
