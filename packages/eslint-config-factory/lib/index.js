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
    // 用于test文件
    {
      files: [
        "**/__jest__/**/*.{js,ts,jsx,tsx}",
        "**/__mocks__/**/*.{js,ts,jsx,tsx}",
        "*.spec.{js,ts,jsx,tsx}",
      ],
      env: {
        jest: true,
      },
      rules: {
        "@typescript-eslint/ban-ts-comment": [
          "warn",
          {
            "ts-ignore": "allow-with-description",
          },
        ],
      },
    },
    // 只处理 js 和 jsx 文件
    {
      files: ["**/*.{js,jsx}"], 
      parser: "@babel/eslint-parser", // 使用 babel 来解析 js 文件
      parserOptions: {
        sourceType: "module", // 支持 import/export
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          globalReturn: false,
        },
      },
    }
  ]
}


