export type AppConfig = {
  env: {
    type: "production" | "development";
  };
  api: {
    port: number;
    path: string;
    url: string;
  };
  db: {
    readUrl: string;
    writeUrl: string;
  };
  next: {
    authSecret: string;
  };
};
