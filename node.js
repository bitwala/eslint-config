module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: ["./base.js", "./typescript.js", "plugin:node/recommended"],
  plugins: ["eslint-plugin-node"]
};
