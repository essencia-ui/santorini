module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
    browser: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint"],
  ignorePatterns: ["./dist/**/*", "/**/node_modules/*"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-import-module-exports": "off",
  },
};
