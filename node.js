module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["./base.js", "plugin:node/recommended"],
  plugins: ["eslint-plugin-node"],
  rules: {
    "node/no-extraneous-import": "error",
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "off",
    "node/no-unsupported-features/es-syntax": "off",
  },
};
