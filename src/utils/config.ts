import dotenv from "dotenv";

type configType = {
  NODE_ENV: string;
};

function getConfigFromEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is undefined`);
  }
  return value;
}

export function getConfig(): configType {
  dotenv.config();

  return {
    NODE_ENV: getConfigFromEnv("NODE_ENV"),
  };
}
