import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollyModule } from 'nestjs-polly';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './app.config';
import { PollyFactory } from './polly.factory';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PollyModule.registerAsync({
      imports: [ConfigModule.forFeature(appConfig)],
      inject: [ConfigService],
      useClass: PollyFactory,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
