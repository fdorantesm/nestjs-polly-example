import { Controller, Get, Header, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Res() res: Response) {
    const audio = await this.appService.getHelloPolly();
    const file = await audio.AudioStream.transformToByteArray();
    res.header('Content-Type', audio.ContentType);
    res.send(Buffer.from(file.buffer));
  }
}
