import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src", "utils"],
  setupFiles: ["dotenv-flow/config", "<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@logger": "<rootDir>/utils/logger",
  },
};

export default config;
