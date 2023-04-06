import { SynthesizeSpeechCommand } from '@aws-sdk/client-polly';
import { Injectable } from '@nestjs/common';
import { InjectPolly, PollyClient } from 'nestjs-polly';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(
    @InjectPolly()
    private readonly polly: PollyClient,
  ) {}

  public getHelloPolly() {
    const text = fs
      .readFileSync(path.join(process.cwd(), 'story.txt'))
      .toString('utf-8');
    return this.polly.send(
      new SynthesizeSpeechCommand({
        TextType: 'text',
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: 'Ivy',
        LanguageCode: 'es-US',
        Engine: 'neural',
      }),
    );
  }
}
