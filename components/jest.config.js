module.exports = {
    roots: ["./src"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    testPathIgnorePatterns: ["node_modules/"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/*.test.(ts|tsx)"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };