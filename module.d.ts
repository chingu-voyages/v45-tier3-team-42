declare namespace NodeJS {
  export interface ProcessEnv {
      PORT: string;
     MONGODB_URI: string;
      RANDOM_TOKEN_SECRET: string;
  }
}
