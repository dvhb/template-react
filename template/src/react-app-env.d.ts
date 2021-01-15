/// <reference types="react-scripts" />

// see https://devblogs.microsoft.com/typescript/announcing-typescript-3-6/
declare type GlobalFetch = WindowOrWorkerGlobalScope;

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly REACT_APP_API_URL: string;
  }
}
