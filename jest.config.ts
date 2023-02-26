import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // preset: "ts-jest",
  moduleFileExtensions: ["js", "ts"],
  transform: { "^.+\\.(ts|js)$": "ts-jest" },
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src", "utils"],
  setupFiles: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/$1",
    "@logger": "<rootDir>/utils/logger",
  },
};

export default config;
