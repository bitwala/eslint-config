module.exports = {
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect"
    }
  },
  env: {
    browser: true
  },
  extends: ["./base.js", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-no-target-blank": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
