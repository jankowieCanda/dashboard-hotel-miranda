/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOCAL_BASE_URL: string,
    readonly VITE_AUTH_TOKEN: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }