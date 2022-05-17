'use strict';

const presetEnvOptions = {
  "modules": false
}

// TODO：babel 预设参数和插件的执行顺序 

module.exports = {
  preset: [
    require("@babel/preset-react"),
    require("@babel/preset-env", presetEnvOptions),
    require("@babel/preset-typescript")
  ],
  plugin: [
    require("@babel/plugin-proposal-class-properties",{ loose: true })
  ]
};
