declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POLLY_ACCESS_KEY_ID: string;
      POLLY_SECRET_ACCESS_KEY: string;
      POLLY_REGION: string;
    }
  }
}

export {};
