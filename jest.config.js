module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // testRegex: "__test__/.*\\spect.ts$",
  automock: false,
  moduleFileExtensions: ["ts", "js", "json"],
  setupFiles: ["./__test__/jestSetup.js"],
};
