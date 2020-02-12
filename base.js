module.exports = {
  env: {
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "implicit-dependencies", "jest", "import"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-untyped-public-signature": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    "implicit-dependencies/no-implicit": "error",
    camelcase: "off",
    "sort-keys": "off",
    "import/order": "error",
    "import/no-internal-modules": "error",
    "no-console": "off",
    "no-restricted-globals": "error",
    "no-unused-expressions": "off",
    "no-useless-constructor": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prettier/prettier": "error"
  }
};
