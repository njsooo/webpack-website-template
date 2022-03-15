module.exports = {
  env: {
    browser: true,
    node: true,
  },
  globals: {
    $: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "prettier"],
  plugins: [],
  rules: {},
};
