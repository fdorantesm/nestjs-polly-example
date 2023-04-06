import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PollyModuleOptions } from 'nestjs-polly';

@Injectable()
export class PollyFactory implements PollyModuleOptions {
  constructor(private readonly configService: ConfigService) {}

  createPollyModuleOptions(): PollyModuleOptions | Promise<PollyModuleOptions> {
    const polly = this.configService.get('app.polly');
    return {
      region: polly.region,
      credentials: {
        accessKeyId: polly.accessKeyId,
        secretAccessKey: polly.secretAccessKey,
      },
    };
  }
}
