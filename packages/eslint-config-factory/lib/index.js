'use strict';

module.exports = {
  parser:"@typescript-eslint/parser",
  extends:[
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "prefer-const": ["error", { destructuring: "all" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console":"error",
  },
  // 启用的环境
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins:[
    "@typescript-eslint",
    "hooks"
  ],
  overrides: [
    {
      files: ["**/**/*.js",""],

    },
    {
      files: ["**/**/*.ts",""],

    }
  ]
}


