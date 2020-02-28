module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: ["./base.js", "plugin:node/recommended"],
  plugins: ["eslint-plugin-node"]
};
