'use strict';

module.exports = {
  parser:"@typescript-eslint/parser",
  extends:[
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  rules: {

    "no-console":"error"
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

  ]
}


