module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "vue"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
