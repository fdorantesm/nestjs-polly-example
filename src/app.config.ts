import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  polly: {
    accessKeyId: process.env.POLLY_ACCESS_KEY_ID,
    secretAccessKey: process.env.POLLY_SECRET_ACCESS_KEY,
    region: process.env.POLLY_REGION,
  },
}));
